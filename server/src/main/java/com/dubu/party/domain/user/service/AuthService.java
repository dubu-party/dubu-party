package com.dubu.party.domain.user.service;


import com.dubu.party.common.security.JwtProvider;
import com.dubu.party.domain.user.db.entity.Authority;
import com.dubu.party.domain.user.db.entity.User;
import com.dubu.party.domain.user.db.repository.UserRepository;
import com.dubu.party.domain.user.request.LoginForm;
import com.dubu.party.domain.user.request.AuthForm;
import com.dubu.party.domain.user.response.AuthResponse;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;

@Service
@Transactional // JPA의 모든 변경은 트랜잭션 안에서 이루어져야 한다.
@RequiredArgsConstructor // final이 선언된 모든 필드를 인자값으로 하는 생성자를 대신 생성해준다.
public class AuthService {
    private final UserRepository userRepository;

    private final UserService userService;
    private final PasswordEncoder passwordEncoder;
    private final JwtProvider jwtProvider;

    public AuthResponse login(LoginForm request) throws Exception {
        User user = userRepository.findByUserId(request.getId()).orElseThrow(
                () -> new BadCredentialsException("사용자를 찾을 수 없습니다.")
        );
        if (!passwordEncoder.matches(request.getPassword(), user.getUserPassword())) {
            throw new BadCredentialsException("비밀번호가 일치하지 않습니다.");
        }
        return AuthResponse.builder()
                .userPkId(user.getUserPkId())
                .userId(user.getUserId())
                .userNickname(user.getUserNickname())
                .userPhone(user.getUserPhone())
                .userEmail(user.getUserEmail())
                .token(jwtProvider.createToken(user, user.getRoles()))
                .build();
    }

    public boolean register(AuthForm authForm) throws Exception{
        try{
            User user = User.builder()
                    .userId(authForm.getId())
                    .userPassword(passwordEncoder.encode(authForm.getPassword()))
                    .userNickname(authForm.getNickname())
                    .userPhone(authForm.getPhone())
                    .userEmail(authForm.getEmail())
                    .build();

            user.setRoles(Collections.singletonList(Authority.builder().authorityName("ROLE_USER").build()));
            userService.saveUser(user);

        }catch (Exception e){
            throw new Exception(e);
        }
        return true;
    }

    public AuthResponse getUser(String userId) throws Exception {
        User user = userRepository.findByUserId(userId)
                .orElseThrow(() -> new Exception("계정을 찾을 수 없습니다."));
        return new AuthResponse(user);
    }

}
