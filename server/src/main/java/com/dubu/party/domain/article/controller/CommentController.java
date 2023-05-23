package com.dubu.party.domain.article.controller;


import com.dubu.party.common.security.JwtProvider;
import com.dubu.party.domain.article.db.data.comment.CommentDto;
import com.dubu.party.domain.article.db.data.comment.CommentDetail;
import com.dubu.party.domain.article.request.CommentForm;
import com.dubu.party.domain.article.service.CommentService;
import com.dubu.party.domain.user.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Slf4j
@Api(value = "댓글 API", tags = {"comment"})
@RestController
@RequestMapping("/api/comments")
public class CommentController {
    @Autowired
    private CommentService commentService;

    @Autowired
    private UserService userService;

    @Autowired
    private JwtProvider jwtProvider;

    @PostMapping("")
    @ApiOperation(value = "댓글 생성")
    public CommentDetail create(HttpServletRequest request, @RequestBody CommentForm commentForm) {
        Long userId = jwtProvider.getUserInfo(request);
        return commentService.createComment(userId, commentForm.getArticleId(), commentForm.getContent());
    }

    @PutMapping("/{id}")
    @ApiOperation(value = "댓글 수정")
    public CommentDetail update(HttpServletRequest request, @PathVariable Long id,  @RequestBody CommentForm commentForm) {
        Long userId = jwtProvider.getUserInfo(request);
        return commentService.updateComment(userId, id, commentForm.getContent());
    }

    @DeleteMapping("/{id}")
    @ApiOperation(value = "댓글 삭제")
    public boolean delete(HttpServletRequest request, @PathVariable Long id) {
        Long userId = jwtProvider.getUserInfo(request);
        return commentService.deleteComment(userId, id);
    }

    @GetMapping("/{id}")
    @ApiOperation(value = "댓글 조회")
    public CommentDetail get(@PathVariable Long id) {
        return commentService.getComment(id);
    }

    @GetMapping("/user/{userId}")
    @ApiOperation(value = "유저의 댓글 조회")
    public List<CommentDto> getUserComment(@PathVariable Long userId) {
        return commentService.getCommentByUser(userId);
    }

    @GetMapping("/article/{articleId}")
    @ApiOperation(value = "게시글의 댓글 조회")
    public List<CommentDto> getArticleComment(@PathVariable Long articleId) {
        return commentService.getCommentByArticle(articleId);
    }

}
