package com.dubu.party.domain.user.db.repository;
import com.dubu.party.domain.user.db.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByUserId(Long userId);
    boolean existsByUserId(String userId);

    User findByUserIdAndUserPassword(String userId, String password);
}
