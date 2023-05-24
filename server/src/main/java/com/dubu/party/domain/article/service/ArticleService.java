package com.dubu.party.domain.article.service;


import com.dubu.party.common.file.Image;
import com.dubu.party.common.security.JwtProvider;
import com.dubu.party.domain.article.data.article.ArticleDto;
import com.dubu.party.domain.article.entity.Article;
import com.dubu.party.domain.article.data.article.ContentSetting;
import com.dubu.party.domain.article.repository.ArticleRepository;
import com.dubu.party.domain.article.request.ArticleForm;
import com.dubu.party.domain.user.entity.User;
import com.dubu.party.domain.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class ArticleService {
    @Autowired
    private ArticleRepository articleRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtProvider jwtProvider;

    public ArticleDto createArticle(Long userId, ArticleForm articleForm) throws Exception{

        User user =  userRepository.findById(userId).orElse(null);
        if(user == null){
            throw new RuntimeException("해당 유저를 찾을 수 없습니다.");
        }

        Article article = new Article();
        article.setUser(user);

        article.setTitle(articleForm.getTitle());
        article.setContent(articleForm.getContent());

        ContentSetting contentSetting = new ContentSetting(articleForm);
        article.setContentSetting(contentSetting);

        /** File **/
        MultipartFile file = articleForm.getFile();
        if (file != null) {
            article.setArticleImage(new Image(file));
        }

        articleRepository.save(article);
        return new ArticleDto(article);
    }

    public List<ArticleDto> getAllArticles(){
        List<Article> articles = articleRepository.findAll();
        return ArticleDto.listOf(articles);
    }

    public ArticleDto getArticleById(Long id) {
        Article article =  articleRepository.findById(id).orElse(null);
        if(article == null){
            throw new ResponseStatusException(org.springframework.http.HttpStatus.NOT_FOUND, "해당 게시글을 찾을 수 없습니다.");
        }
        return new ArticleDto(article);
    }

    public boolean deleteArticleById(Long userId,Long id){
        Article article =  articleRepository.findById(id).orElse(null);
        if(article == null){
            throw new IllegalStateException("해당 게시글을 찾을 수 없습니다.");
        }
        if(article.getUser().getId() != userId){
            throw new IllegalStateException("해당 게시글을 수정할 권한이 없습니다.");
        }
        articleRepository.deleteById(id);
        return true;
    }

    public ArticleDto updateArticleById(Long userId, Long id, ArticleForm articleForm){

        Article article =  articleRepository.findById(id).orElse(null);
        if(article == null){
            throw new IllegalStateException("해당 게시글을 찾을 수 없습니다.");
        }
        if(article.getUser().getId() != userId){
            throw new IllegalStateException("해당 게시글을 수정할 권한이 없습니다.");
        }

        ContentSetting contentSetting = new ContentSetting(articleForm);

        article.setTitle(articleForm.getTitle());
        article.setContent(articleForm.getContent());
        article.setContentSetting(contentSetting);

        articleRepository.save(article);
        return new ArticleDto(article);
    }

    public  List<ArticleDto> getArticlesByUser(Long userId){

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("해당 유저를 찾을 수 없습니다."));

        List<Article> articles = articleRepository.findByUser(user);

        return ArticleDto.listOf(articles);
    }
}
