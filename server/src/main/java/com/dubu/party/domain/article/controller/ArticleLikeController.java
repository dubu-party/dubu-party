package com.dubu.party.domain.article.controller;


import com.dubu.party.common.security.JwtProvider;
import com.dubu.party.domain.article.service.ArticleLikeService;
import com.dubu.party.domain.user.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@Slf4j
@Api(value = "게시글 좋아요 API", tags = {"like it"})
@RestController
@RequestMapping("/api/likes")
public class ArticleLikeController {
    @Autowired
    private ArticleLikeService articleLikeService;

    @Autowired
    private UserService userService;

    @Autowired
    private JwtProvider jwtProvider;

    @PostMapping("/{articleId}")
    @ApiOperation(value = "좋아요")
    public boolean like(HttpServletRequest request, @PathVariable Long articleId) {
        Long userId = jwtProvider.getUserInfo(request);
        return articleLikeService.like(userId, articleId);
    }

    @DeleteMapping("/{articleId}")
    @ApiOperation(value = "좋아요 취소")
    public boolean unlike(HttpServletRequest request, @PathVariable Long articleId) {
        Long userId = jwtProvider.getUserInfo(request);
        return articleLikeService.unlike(userId, articleId);
    }
}
