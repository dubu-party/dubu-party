package com.dubu.party.domain.article.controller;


import com.dubu.party.domain.article.db.entity.Article;
import com.dubu.party.domain.article.db.entity.ArticleDto;
import com.dubu.party.domain.article.request.ArticleForm;
import com.dubu.party.domain.article.service.ArticleService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@Api(value = "게시글 API")
@RestController
@RequestMapping("/api/articles")
public class ArticleController {
    @Autowired
    private ArticleService articleService;

    @PostMapping("/create")
    @ApiOperation(value = "게시글 생성")
    public Long createArticle(@RequestBody ArticleForm articleForm) {
        return articleService.createArticle(articleForm);
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

    @GetMapping("/user/{userPkId}")
    @ApiOperation(value = "유저의 모든 게시글 조회")
    public List<ArticleDto> getArticlesByUserPkId(@PathVariable Long userPkId){
        return articleService.getArticlesByUserPkId(userPkId);
    }

}
