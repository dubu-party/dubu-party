package com.dubu.party.domain.user.repository;


import com.dubu.party.domain.user.entity.Follow;
import com.dubu.party.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional // JPA의 모든 데이터 변경은 트랜잭션 안에서 실행되어야 한다.
public interface FollowRepository extends JpaRepository<Follow, Long> {
    boolean existsByFollowerAndFollowing(User user, User followUser);

    Follow findByFollowerAndFollowing(User user, User followUser);

    List<Follow> findAllByFollowing(User user);

    List<Follow> findAllByFollower(User user);
}
