package com.dubu.party.domain.user.controller;


import com.dubu.party.domain.user.db.entity.User;
import com.dubu.party.domain.user.request.LoginForm;
import com.dubu.party.domain.user.service.AuthService;
import io.swagger.annotations.Api;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@Slf4j
@Api(value = "유저 인증 API")
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody LoginForm loginForm){
        return new ResponseEntity<>(
                authService.login(loginForm), HttpStatus.OK
        );
    }
}
