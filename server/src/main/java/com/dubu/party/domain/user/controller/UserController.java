package com.dubu.party.domain.user.controller;

import com.dubu.party.domain.user.db.entity.User;
import com.dubu.party.domain.user.db.entity.UserDto;
import com.dubu.party.domain.user.request.SignupForm;
import com.dubu.party.domain.user.service.UserService;
import io.swagger.annotations.Api;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j // 로그 메시지를 출력
@Api(value = "유저 정보 API") // Swagger 라이브러리를 통해 사용
@RestController // 웹 애플리케이션의 RESTful 웹 서비스를 개발하기 위한 어노테이션
@RequestMapping("/api/users") // api 요청들을 관리할 예정
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/all")
    public ResponseEntity<List<User>> getAllUsers() {
        return new ResponseEntity<>(
                userService.getAllUsers(), HttpStatus.OK
        );
    }

    @PostMapping("/signup")
    public ResponseEntity<Long> saveUser(@RequestBody SignupForm signupForm){
        User user = signupForm.toEntity();
        Long userId = userService.saveUser(user);
        return new ResponseEntity<>(
                userId, HttpStatus.CREATED
        );
    }
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserByPkId(@PathVariable("id") Long id){
        return new ResponseEntity<>(
                userService.getUserByPkId(id), HttpStatus.OK
        );
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable("id")Long id){
        userService.deleteUser(id);
        return ResponseEntity.status(HttpStatus.OK).build();
    }
    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable("id")Long id,@RequestBody User user){
        userService.updateUser(id,user);
        return new ResponseEntity<>(
                user, HttpStatus.OK
        );
    }
    @PutMapping("/{id}/password")
    public ResponseEntity<?> updatePassword(@PathVariable("id") Long id,@RequestBody String password) {
        userService.updatePassword(id, password);
        return ResponseEntity.status(HttpStatus.OK).build();
    }
}
