package com.dubu.party.domain.article.service;


import com.dubu.party.common.file.Image;
import com.dubu.party.common.security.JwtProvider;
import com.dubu.party.domain.article.data.article.ArticleDetail;
import com.dubu.party.domain.article.data.article.ArticleDto;
import com.dubu.party.domain.article.entity.Article;
import com.dubu.party.domain.article.repository.ArticleRepository;
import com.dubu.party.domain.article.request.ArticleForm;
import com.dubu.party.domain.user.entity.User;
import com.dubu.party.domain.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
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


    public ArticleDto createArticle(Long userId, ArticleForm articleForm) throws Exception{

        User user =  userRepository.findById(userId).orElse(null);
        if(user == null){
            throw new RuntimeException("해당 유저를 찾을 수 없습니다.");
        }

        Article article = new Article();
        article.setUser(user);

        article.setTitle(articleForm.getTitle());
        article.setFooter(articleForm.getFooter());
        article.setLikeCount(0);
        /** File **/
        MultipartFile file = articleForm.getFile();
        if (file != null) {
            article.setArticleImage(new Image(file));
        }

        articleRepository.save(article);
        return new ArticleDto(article);
    }



    public ArticleDto updateArticleById(Long userId, Long id, ArticleForm articleForm) throws Exception{

        Article article =  articleRepository.findById(id).orElse(null);
        if(article == null){
            throw new IllegalStateException("해당 게시글을 찾을 수 없습니다.");
        }
        if(article.getUser().getId() != userId){
            throw new IllegalStateException("해당 게시글을 수정할 권한이 없습니다.");
        }

        article.setTitle(articleForm.getTitle());
        article.setFooter(articleForm.getFooter());

        MultipartFile file = articleForm.getFile();
        if (file != null) {
            article.setArticleImage(new Image(file));
        }

        articleRepository.save(article);
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

    public ArticleDetail getArticleById(Long id) {
        Article article =  articleRepository.findById(id).orElse(null);
        if(article == null){
            throw new ResponseStatusException(org.springframework.http.HttpStatus.NOT_FOUND, "해당 게시글을 찾을 수 없습니다.");
        }
        return new ArticleDetail(article);
    }
    public  List<ArticleDto> getArticlesByUser(Long userId){

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("해당 유저를 찾을 수 없습니다."));

        List<Article> articles = articleRepository.findByUser(user);

        return ArticleDto.listOf(articles);
    }

    public List<ArticleDto> getArticlesByPage(int page, int size, String sort){
        // sort 가 likes 면 likeCount 로 변경
        if(sort.equals("likes")){
            sort = "likeCount";
        }
        Sort sort1 = Sort.by(Sort.Direction.DESC, sort);
        PageRequest pageRequest = PageRequest.of(page, size, sort1);
        Page<Article> articlesPage = articleRepository.findAll(pageRequest);
        List<Article> articles = articlesPage.getContent();

        return ArticleDto.listOf(articles);
    }


    public List<ArticleDto> getArticlesILike (Long userId){
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("해당 유저를 찾을 수 없습니다."));

        List<Article> articles = articleRepository.findLikedArticlesByUser(user);

        return ArticleDto.listOf(articles);
    }

}
