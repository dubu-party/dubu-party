package com.dubu.party.domain.article.service;

import com.dubu.party.domain.article.entity.Article;
import com.dubu.party.domain.article.entity.ArticleLike;
import com.dubu.party.domain.article.repository.ArticleRepository;
import com.dubu.party.domain.article.repository.ArticleLikeRepository;
import com.dubu.party.domain.user.entity.User;
import com.dubu.party.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ArticleLikeService {

    @Autowired
    private final ArticleLikeRepository articleLikeRepository;
    @Autowired
    private final ArticleRepository articleRepository;

    @Autowired
    private final UserRepository userRepository;

    public boolean like(Long userId, Long articleId) {
        User user = userRepository.getById(userId);
        if (user == null) {
            throw new IllegalStateException("사용자를 찾을 수 없습니다.");
        }
        if (articleLikeRepository.existsByUserIdAndArticleId(userId, articleId)) {
            throw new IllegalStateException("이미 좋아요가 눌려있습니다.");
//            throw new BadCredentialsException("이미 좋아요가 눌려있습니다.");
        }
        Article article = articleRepository.findById(articleId).orElse(null);
        if (article == null) {
            throw new IllegalStateException("게시글을 찾을 수 없습니다.");
        }
        ArticleLike like = new ArticleLike();
        like.setUser(user);
        like.setArticle(article);
        articleLikeRepository.save(like);
        return true;
    }


    public boolean unlike(Long userId, Long articleId) {
        ArticleLike like = articleLikeRepository.getByUserIdAndArticleId(userId, articleId);
        if (like == null) {
            throw new IllegalStateException("좋아요가 눌려있지 않습니다.");
        }
        articleLikeRepository.delete(like);
        return true;
    }

}
