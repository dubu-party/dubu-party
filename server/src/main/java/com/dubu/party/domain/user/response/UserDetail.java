package com.dubu.party.domain.user.response;

import com.dubu.party.domain.article.db.entity.Article;
import com.dubu.party.domain.user.db.entity.Follow;
import com.dubu.party.domain.user.db.entity.User;
import com.dubu.party.domain.user.db.entity.UserDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter @Setter
@NoArgsConstructor
public class UserDetail {
    private Long id;
    private String email;
    private String nickname;
    private String phoneNumber;

    private String profileUrl;

    private List<UserDto> follower;

    private List<UserDto> following;

    public UserDetail(User user, List<UserDto> follower, List<UserDto> following){
        this.id = user.getId();
        this.email = user.getEmail();
        this.nickname = user.getNickName();
        this.phoneNumber = user.getPhoneNumber();
        this.profileUrl = user.getProfileImage().getFileUrl();

        this.follower = follower;
        this.following = following;


    }
}
