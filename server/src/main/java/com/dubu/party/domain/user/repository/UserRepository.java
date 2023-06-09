package com.dubu.party.domain.user.repository;
import com.dubu.party.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;


@Repository
@Transactional // JPA의 모든 데이터 변경은 트랜잭션 안에서 실행되어야 한다.
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);

    boolean existsByEmail(String email);

//    User findByUserIdAndUserPassword(String userId, String password);
}
