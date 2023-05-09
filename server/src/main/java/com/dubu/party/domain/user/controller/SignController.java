package com.dubu.party.domain.user.controller;

import com.dubu.party.domain.user.db.repository.UserRepository;
import com.dubu.party.domain.user.request.SignRequest;
import com.dubu.party.domain.user.response.SignResponse;
import com.dubu.party.domain.user.service.SignService;
import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@Slf4j
@Api(value = "유저 인증 API")
@RequestMapping("/api/auth")
public class SignController {
    private final UserRepository userRepository;
    private final SignService signService;

    @PostMapping(value="/register")
    public ResponseEntity<Boolean> register(@RequestBody SignRequest request) throws Exception {
        return new ResponseEntity<>(signService.register(request), HttpStatus.OK);
    }
    @PostMapping(value = "/login")
    public ResponseEntity<SignResponse> login(@RequestBody SignRequest request) throws Exception {
        return new ResponseEntity<>(signService.login(request), HttpStatus.OK);
    }
    @GetMapping("/user/get")
    public ResponseEntity<SignResponse> getUser(@RequestParam String userId) throws Exception {
        return new ResponseEntity<>( signService.getUser(userId), HttpStatus.OK);
    }

    @GetMapping("/admin/get")
    public ResponseEntity<SignResponse> getUserForAdmin(@RequestParam String userId) throws Exception {
        return new ResponseEntity<>( signService.getUser(userId), HttpStatus.OK);
    }

}
