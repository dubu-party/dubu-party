package com.dubu.party.domain.user.controller;

import com.dubu.party.common.security.JwtProvider;
import com.dubu.party.domain.user.data.UserSimplify;
import com.dubu.party.domain.user.request.UpdateSettingForm;
import com.dubu.party.domain.user.request.UpdateUserForm;
import com.dubu.party.domain.user.data.UserDetail;
import com.dubu.party.domain.user.service.UserService;
import io.swagger.annotations.Api;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Slf4j // 로그 메시지를 출력
@Api(value = "유저 정보 API", tags = {"user"})
@RestController // 웹 애플리케이션의 RESTful 웹 서비스를 개발하기 위한 어노테이션
@RequestMapping("/api/users") // api 요청들을 관리할 예정
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private JwtProvider jwtProvider;

    @GetMapping("/all")
    public ResponseEntity<List<UserSimplify>> getAllUsers() {
        return new ResponseEntity<>(
                userService.getAllUsers(), HttpStatus.OK
        );
    }


    @GetMapping("/{id}")
    public ResponseEntity<UserDetail> getUserById(@PathVariable("id") Long id){
        return new ResponseEntity<>(
                userService.getInfo(id), HttpStatus.OK
        );
    }

    @PutMapping("")
    public ResponseEntity<UserSimplify> updateUser(HttpServletRequest request, UpdateUserForm updateUserForm)throws Exception{
        Long userId = jwtProvider.getUserInfo(request);

        return new ResponseEntity<>(
                userService.updateUser(userId, updateUserForm), HttpStatus.OK
        );
    }
    @PutMapping("/{id}/password")
    public ResponseEntity<?> updatePassword(@PathVariable("id") Long id,@RequestBody String password) {
        userService.updatePassword(id, password);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @GetMapping("/myInfo")
    public ResponseEntity<UserDetail> getMyInfo(HttpServletRequest request) {
        Long userId = jwtProvider.getUserInfo(request);
        return new ResponseEntity<>(userService.getInfo(userId), HttpStatus.OK);
    }

    @PutMapping("/setting")
    public ResponseEntity<Boolean> updateSetting(HttpServletRequest request, @RequestBody UpdateSettingForm settingForm) {
        Long userId = jwtProvider.getUserInfo(request);
        return new ResponseEntity<>(userService.updateSetting(userId,settingForm.toSetting()), HttpStatus.OK);
    }
}
