package com.dubu.party.domain.article.controller;


import com.dubu.party.common.security.JwtProvider;
import com.dubu.party.domain.article.data.article.ArticleDetail;
import com.dubu.party.domain.article.data.article.ArticleDto;
import com.dubu.party.domain.article.request.ArticleForm;
import com.dubu.party.domain.article.service.ArticleService;
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



    @PostMapping
    @ApiOperation(value = "게시글 생성")
    public ArticleDto createArticle(HttpServletRequest request,
                                     ArticleForm articleForm) throws Exception {
        Long userId = jwtProvider.getUserInfo(request);
        return articleService.createArticle(userId,articleForm);
    }

    @PutMapping("/{id}")
    @ApiOperation(value = "게시글 수정")
    public ArticleDto updateArticle(HttpServletRequest request, @PathVariable Long id,
                                    @RequestBody ArticleForm articleForm) throws Exception{
        Long userId = jwtProvider.getUserInfo(request);
        return articleService.updateArticleById(userId,id, articleForm);
    }

    @GetMapping("/{id}")
    @ApiOperation(value = "게시글 조회")
    public ArticleDetail getArticleById(@PathVariable Long id) {
        return articleService.getArticleById(id);
    }

    @DeleteMapping("/{id}")
    @ApiOperation(value = "게시글 삭제")
    public void deleteArticle(HttpServletRequest request,@PathVariable Long id) {
        Long userId = jwtProvider.getUserInfo(request);

        articleService.deleteArticleById(userId,id);
    }

    @GetMapping("/mine")
    @ApiOperation(value = "나의 모든 게시글 조회")
    public List<ArticleDto> getMyArticles(HttpServletRequest request){
        Long userId = jwtProvider.getUserInfo(request);
        return articleService.getArticlesByUser(userId);
    }

    @GetMapping("/user/{userId}")
    @ApiOperation(value = "유저의 모든 게시글 조회")
    public List<ArticleDto> getArticlesByUser(HttpServletRequest request, @PathVariable Long userId){

        return articleService.getArticlesByUser(userId);
    }


    @GetMapping
    @ApiOperation(value = "페이징 처리")
    public List<ArticleDto> getArticlesByPage(
            @RequestParam(value = "page", defaultValue = "0") int page,
            @RequestParam(value = "size", defaultValue = "5") int size,
            @RequestParam(value = "sort", defaultValue = "likes") String sort
    ){
        return articleService.getArticlesByPage(page,size,sort);
    }

    @GetMapping("/liked/{userId}")
    @ApiOperation(value = "좋아요 한 게시글 조회")
    public List<ArticleDto> getArticlesILike(HttpServletRequest request,@PathVariable Long userId) {
        return articleService.getArticlesILike(userId);
    }


}
