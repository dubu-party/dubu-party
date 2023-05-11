package com.dubu.party.domain.article.service;


import com.dubu.party.common.security.JwtProvider;
import com.dubu.party.domain.article.db.entity.Article;
import com.dubu.party.domain.article.db.entity.ArticleDto;
import com.dubu.party.domain.article.db.entity.ContentSetting;
import com.dubu.party.domain.article.db.repository.ArticleRepository;
import com.dubu.party.domain.article.request.ArticleForm;
import com.dubu.party.domain.user.db.entity.User;
import com.dubu.party.domain.user.db.entity.UserDto;
import com.dubu.party.domain.user.db.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class ArticleService {
    @Autowired
    private ArticleRepository articleRepository;

    @Autowired
    private UserRepository userRepository;

    public Long createArticle(ArticleForm articleForm) throws RuntimeException{
        User user =  userRepository.findByUserPkId(articleForm.getUserPkId())
                .orElseThrow(() -> new RuntimeException("해당 유저를 찾을 수 없습니다."));


        Article article = Article.builder()
                .title(articleForm.getTitle())
                .content(articleForm.getContent())
                .contentSetting(articleForm.getContentSetting())
                .build();



        article.setUser(user);
        articleRepository.save(article);
        return article.getId();
    }

    public List<ArticleDto> getAllArticles(){
        List<Article> articles = articleRepository.findAll();

        List<ArticleDto> newArticles = articles.stream()
                .map(article -> new ArticleDto(article))
                .collect(Collectors.toList());

        return newArticles;
    }

    public ArticleDto getArticleById(Long id) {
        Article article =  articleRepository.findById(id).orElse(null);
        if(article == null){
            throw new ResponseStatusException(org.springframework.http.HttpStatus.NOT_FOUND, "해당 게시글을 찾을 수 없습니다.");
        }
        return new ArticleDto(article);
    }

    public boolean deleteArticleById(Long id){
        Article article =  articleRepository.findById(id).orElse(null);
        if(article == null){
            throw new ResponseStatusException(org.springframework.http.HttpStatus.NOT_FOUND, "해당 게시글을 찾을 수 없습니다.");
        }
        articleRepository.deleteById(id);
        return true;
    }

    public ArticleDto updateArticleById(Long id, ArticleForm articleForm){
        Article article =  articleRepository.findById(id).orElse(null);
        if(article == null){
            throw new ResponseStatusException(org.springframework.http.HttpStatus.NOT_FOUND, "해당 게시글을 찾을 수 없습니다.");
        }
        article.setTitle(articleForm.getTitle());
        article.setContent(articleForm.getContent());
        article.setContentSetting(articleForm.getContentSetting());

        articleRepository.save(article);
        return new ArticleDto(article);
    }

    public  List<ArticleDto> getArticlesByUserPkId(Long userPkId){
        User user =  userRepository.findByUserPkId(userPkId)
                .orElseThrow(() -> new RuntimeException("해당 유저를 찾을 수 없습니다."));

        List<Article> articles = articleRepository.findByUser(user);

        List<ArticleDto> newArticles = articles.stream()
                .map(article -> new ArticleDto(article))
                .collect(Collectors.toList());

        return newArticles;
    }
}
