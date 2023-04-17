package com.dubu.party.domain.user.db.repository;

import com.dubu.party.domain.user.db.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByUserId(String userId);
}
