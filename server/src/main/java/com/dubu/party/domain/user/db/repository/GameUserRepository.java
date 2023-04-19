package com.dubu.party.domain.user.db.repository;


import com.dubu.party.domain.user.db.entity.GameUser;
import com.dubu.party.domain.user.db.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GameUserRepository extends JpaRepository<GameUser, Long> {
    GameUser findByUserId(String userId);

}
