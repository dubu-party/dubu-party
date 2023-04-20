package com.dubu.party.domain.user.service;

import com.dubu.party.common.exception.ErrorException;
import com.dubu.party.domain.user.db.entity.User;
import com.dubu.party.domain.user.db.repository.UserRepository;
import com.dubu.party.domain.user.request.LoginForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    @Autowired
    private UserRepository userRepository;

    public boolean isExistUser(String userId){
        return userRepository.existsByUserId(userId);
    }

    public User login(LoginForm loginForm) throws ErrorException {
        String userId = loginForm.getId();
        String password = loginForm.getPassword();
        User user = userRepository.findByUserIdAndUserPassword(userId, password);
        if (user == null) {
            throw new ErrorException(401, "아이디 또는 비밀번호가 틀렸습니다.");
        }
        return user;
    }
    public void logout(String userId){
        return ;
    }
}
