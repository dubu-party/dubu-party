package com.dubu.party.domain.article.repository;
import com.dubu.party.domain.article.entity.Article;
import com.dubu.party.domain.user.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
// 메소드가 실행되는 동안에는 데이터베이스의 상태가 변하지 않도록 하는 것이다.
public interface ArticleRepository extends JpaRepository<Article, Long> {

    Page<Article> findAll(Pageable pageable);

    Article findById(long id);

    void deleteById(long id);

    List<Article> findByUser(User user);


}
