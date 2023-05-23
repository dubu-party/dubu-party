package com.dubu.party.domain.user.controller;


import com.dubu.party.common.security.JwtProvider;
import com.dubu.party.domain.user.db.entity.Follow;
import com.dubu.party.domain.user.db.entity.UserDetail;
import com.dubu.party.domain.user.db.entity.UserDto;
import com.dubu.party.domain.user.service.FollowService;
import io.swagger.annotations.Api;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Slf4j
@Api(value = "팔로우 API", tags = {"follow"})
@RestController
@RequestMapping("/api/follows")
public class FollowController {
    @Autowired
    private FollowService followService;

    @Autowired
    private JwtProvider jwtProvider;

    @PostMapping("/{id}") // 팔로우
    public ResponseEntity<Boolean> follow(HttpServletRequest request, @PathVariable("id") Long id) {
        Long userId = jwtProvider.getUserInfo(request);
        return new ResponseEntity<>(followService.follow(userId, id), HttpStatus.OK);
    }

    @DeleteMapping("/{id}") // 언팔로우
    public ResponseEntity<Boolean> unfollow( HttpServletRequest request,@PathVariable("id") Long id) {
        Long userId = jwtProvider.getUserInfo(request);
        return new ResponseEntity<>(followService.unfollow(userId, id), HttpStatus.OK);
    }

    @GetMapping("/{userId}/followers") //
    public ResponseEntity<?> getFollowers(@PathVariable("userId") Long userId) {
        return new ResponseEntity<>(followService.getFollowers(userId), HttpStatus.OK);
    }
    @GetMapping("/{userId}/followings") //
    public ResponseEntity<?> getFollowings(@PathVariable("userId") Long userId) {
        return new ResponseEntity<>(followService.getFollowings(userId), HttpStatus.OK);
    }
}
