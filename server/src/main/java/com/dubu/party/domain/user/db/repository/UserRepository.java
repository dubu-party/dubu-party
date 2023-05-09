package com.dubu.party.domain.user.db.repository;
import com.dubu.party.domain.user.db.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;


@Repository
@Transactional // JPA의 모든 데이터 변경은 트랜잭션 안에서 실행되어야 한다.
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUserId(String userId);

    User findByUserPkId(Long userPkId);


    boolean existsByUserId(String userId);

    User findByUserIdAndUserPassword(String userId, String password);
}
