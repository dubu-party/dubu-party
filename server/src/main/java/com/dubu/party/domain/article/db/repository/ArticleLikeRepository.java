package com.dubu.party.domain.article.db.repository;

import com.dubu.party.domain.article.db.entity.ArticleLike;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional // JPA의 모든 데이터 변경은 트랜잭션 안에서 실행되어야 한다.
public interface ArticleLikeRepository extends JpaRepository<ArticleLike, Long> {
    boolean existsByUserIdAndArticleId(Long userId, Long articleId);
    ArticleLike findByUserIdAndArticleId(Long userId, Long articleId);

}
