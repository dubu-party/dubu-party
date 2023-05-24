package com.dubu.party.domain.article.repository;

import com.dubu.party.domain.article.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findByArticleId(Long articleId);

    List<Comment> findByUserId(Long userId);



}
