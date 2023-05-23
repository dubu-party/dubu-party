package com.dubu.party.domain.user.service;


import com.dubu.party.common.file.Image;
import com.dubu.party.common.security.JwtProvider;
import com.dubu.party.domain.user.db.entity.Authority;
import com.dubu.party.domain.user.db.entity.User;
import com.dubu.party.domain.user.db.repository.UserRepository;
import com.dubu.party.domain.user.request.LoginForm;
import com.dubu.party.domain.user.request.CreateUserForm;
import com.dubu.party.domain.user.db.entity.AuthDetail;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.util.Collections;

@Service
@Transactional // JPA의 모든 변경은 트랜잭션 안에서 이루어져야 한다.
@RequiredArgsConstructor // final이 선언된 모든 필드를 인자값으로 하는 생성자를 대신 생성해준다.
public class AuthService {
    private final UserRepository userRepository;

    private final UserService userService;
    private final PasswordEncoder passwordEncoder;
    private final JwtProvider jwtProvider;

    public Long register(CreateUserForm createUserForm) throws Exception{
        try{
            User user = new User();
            user.setEmail(createUserForm.getEmail());
            user.setPassword(passwordEncoder.encode(createUserForm.getPassword()));
            user.setNickName(createUserForm.getNickname());
            user.setPhoneNumber(createUserForm.getPhoneNumber());

            MultipartFile file = createUserForm.getProfileImage();
            if (file != null) {
                Image image = new Image(file);
                user.setProfileImage(image);
            }

            user.setRoles(Collections.singletonList(Authority.builder().authorityName("ROLE_USER").build()));
            return userService.saveUser(user);

        }catch (Exception e){
            throw new Exception(e);
        }
    }

    public AuthDetail login(LoginForm request) throws Exception {
        User user = userRepository.findByEmail(request.getEmail()).orElseThrow(
                () -> new BadCredentialsException("사용자를 찾을 수 없습니다.")
        );
        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new BadCredentialsException("비밀번호가 일치하지 않습니다.");
        }
        return AuthDetail.builder()
                .id(user.getId())
                .email(user.getEmail())
                .nickName(user.getNickName())
                .phoneNumber(user.getPhoneNumber())
                .token(jwtProvider.createToken(user, user.getRoles()))
                .build();
    }

    public boolean delete(LoginForm request){
        User user = userRepository.findByEmail(request.getEmail()).orElseThrow(
                () -> new BadCredentialsException("사용자를 찾을 수 없습니다.")
        );
        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new BadCredentialsException("비밀번호가 일치하지 않습니다.");
        }
        if(user == null){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "해당 유저를 찾을 수 없습니다.");
        }
        userRepository.deleteById(user.getId());
        return true;
    }
}
