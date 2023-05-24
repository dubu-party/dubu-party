package com.dubu.party.domain.article.repository;

import com.dubu.party.domain.article.entity.ArticleLike;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional // JPA의 모든 데이터 변경은 트랜잭션 안에서 실행되어야 한다.
public interface ArticleLikeRepository extends JpaRepository<ArticleLike, Long> {
    boolean existsByUserIdAndArticleId(Long userId, Long articleId);

    ArticleLike getByUserIdAndArticleId(Long userId, Long articleId);

}
// get 메서드는 식별자를 사용하여 엔티티를 바로 조회하고, find 메서드는 다양한 조건을 사용하여 엔티티를 조회합니다.