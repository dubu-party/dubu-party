package com.dubu.party.domain.user.service;

import com.dubu.party.domain.user.entity.Follow;
import com.dubu.party.domain.user.entity.User;
import com.dubu.party.domain.user.data.UserSimplify;
import com.dubu.party.domain.user.repository.FollowRepository;
import com.dubu.party.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor // final이 선언된 모든 필드를 인자값으로 하는 생성자를 대신 생성해준다.
public class FollowService {
    @Autowired
    private final UserRepository userRepository;
    @Autowired
    private final FollowRepository followRepository;


    public boolean follow(Long userId, Long followUserId) {
        User user = userRepository.findById(userId).orElse(null);
        User followUser = userRepository.findById(followUserId).orElse(null);

        if(user == null || followUser == null) {
            // 유저를 찾을 수 없는 에러 409
            throw new IllegalStateException("사용자를 찾을 수 없습니다.");
        }

        if(isFollowing(user, followUser)){
            // 이미 팔로우 중인 에러 409
            throw new IllegalStateException("이미 팔로우 중입니다.");
        }

        Follow follow = new Follow();
        follow.setFollower(user);
        follow.setFollowing(followUser);
        followRepository.save(follow);

        return true;

    }

    public boolean unfollow(Long userId, Long followUserId) {
        User user = userRepository.findById(userId).orElse(null);
        User followUser = userRepository.findById(followUserId).orElse(null);
        if(user == null || followUser == null) {
            throw new IllegalStateException("사용자를 찾을 수 없습니다.");
        }

        Follow follow = followRepository.findByFollowerAndFollowing(user, followUser);

        if(follow == null) {
            throw new IllegalStateException("팔로우 중이 아닙니다.");
        }

        followRepository.delete(follow);

        return true;
    }

    private boolean isFollowing(User user, User followUser) {
        return followRepository.existsByFollowerAndFollowing(user, followUser);
    }

    public List<UserSimplify> getFollowers(Long userId) {
        User user = userRepository.findById(userId).orElse(null);
        if(user == null) {
            throw new IllegalStateException("사용자를 찾을 수 없습니다.");
        };
        List<UserSimplify> followers = new ArrayList<UserSimplify>();
        for(Follow follow : user.getFollowing()) {
            followers.add(new UserSimplify(follow.getFollower()));
        }
        return followers;
    }

    public List<UserSimplify> getFollowings(Long userId) {
        User user = userRepository.findById(userId).orElse(null);
        if(user == null) {
            throw new IllegalStateException("사용자를 찾을 수 없습니다.");
        };
        List<UserSimplify> followings = new ArrayList<UserSimplify>();
        for(Follow follow : user.getFollower()) {
            followings.add(new UserSimplify(follow.getFollowing()));
        }
        return followings;
    }
}
