package com.dubu.party.domain.article.db.repository;
import com.dubu.party.domain.article.db.entity.Article;
import com.dubu.party.domain.user.db.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
// 메소드가 실행되는 동안에는 데이터베이스의 상태가 변하지 않도록 하는 것이다.
public interface ArticleRepository extends JpaRepository<Article, Long> {
    List<Article> findAll();

    Article findById(long id);

    void deleteById(long id);

    List<Article> findByUser(User user);

}
