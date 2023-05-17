package com.dubu.party.domain.user.controller;

import com.dubu.party.domain.user.db.repository.UserRepository;
import com.dubu.party.domain.user.request.LoginForm;
import com.dubu.party.domain.user.request.CreateUserForm;
import com.dubu.party.domain.user.response.AuthResponse;
import com.dubu.party.domain.user.service.AuthService;
import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@Slf4j
@Api(value = "유저 인증 API", tags = {"auth"})
@RequestMapping("/api/auth")
public class AuthController {
    private final UserRepository userRepository;
    private final AuthService authService;

    @PostMapping(value="/register")
    @ApiOperation(value = "회원가입")
    public ResponseEntity<Long> register( CreateUserForm request) throws Exception {
        return new ResponseEntity<>(authService.register(request), HttpStatus.OK);
    }
    @PostMapping(value = "/login")
    @ApiOperation(value = "로그인")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginForm request) throws Exception {
        return new ResponseEntity<>(authService.login(request), HttpStatus.OK);
    }

}
