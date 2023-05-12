package com.dubu.party.domain.article.controller;


import com.dubu.party.common.security.JwtProvider;
import com.dubu.party.domain.article.db.entity.Article;
import com.dubu.party.domain.article.db.entity.ArticleDto;
import com.dubu.party.domain.article.request.ArticleForm;
import com.dubu.party.domain.article.service.ArticleService;
import com.dubu.party.domain.user.db.entity.UserDto;
import com.dubu.party.domain.user.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Slf4j
@Api(value = "게시글 API", tags = {"article"})
@RestController
@RequestMapping("/api/articles")
// swagger 에 보이는 이름 변경
public class ArticleController {
    @Autowired
    private ArticleService articleService;

    @Autowired
    private UserService userService;

    @Autowired
    private JwtProvider jwtProvider;

    @PostMapping("/create")
    @ApiOperation(value = "게시글 생성")
    public Long createArticle(HttpServletRequest request,@RequestBody ArticleForm articleForm) {
        Long userPkId = jwtProvider.getUserInfo(request);
        return articleService.createArticle(userPkId,articleForm);
    }

    @GetMapping("/all")
    @ApiOperation(value = "모든 게시글 조회")
    public List<ArticleDto> getAllArticles() {
        return articleService.getAllArticles();
    }

    @GetMapping("/{id}")
    @ApiOperation(value = "게시글 조회")
    public ArticleDto getArticleById(@PathVariable Long id) {
        return articleService.getArticleById(id);
    }

    @DeleteMapping("/{id}")
    @ApiOperation(value = "게시글 삭제")
    public void deleteArticle(@PathVariable Long id) {
        articleService.deleteArticleById(id);
    }

    @PutMapping("/{id}")
    @ApiOperation(value = "게시글 수정")
    public ArticleDto updateArticle(@PathVariable Long id, @RequestBody ArticleForm articleForm) {
        return articleService.updateArticleById(id, articleForm);
    }

    @GetMapping("/mine")
    @ApiOperation(value = "나의 모든 게시글 조회")
    public List<ArticleDto> getMyArticles(HttpServletRequest request){
        Long userPkId = jwtProvider.getUserInfo(request);
        return articleService.getArticlesByUserPkId(userPkId);
    }

    @GetMapping("/user/{userPkId}")
    @ApiOperation(value = "유저의 모든 게시글 조회")
    public List<ArticleDto> getArticlesByUserPkId(HttpServletRequest request,@PathVariable Long userPkId){

        return articleService.getArticlesByUserPkId(userPkId);
    }
}
