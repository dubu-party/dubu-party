package com.dubu.party.domain.user.db.entity;

import com.dubu.party.common.file.Image;
import com.dubu.party.domain.article.db.data.article.ArticleDto;
import com.dubu.party.domain.article.db.data.article.ArticleWithLike;
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

    private List<ArticleDto> articles;



    public UserDetail(User user, List<UserDto> follower, List<UserDto> following,List<ArticleDto> articles){
        this.id = user.getId();
        this.email = user.getEmail();
        this.nickname = user.getNickName();
        this.phoneNumber = user.getPhoneNumber();
        Image image = user.getProfileImage();
        if(image != null){
            this.profileUrl = user.getProfileImage().getFileUrl();
        }

        this.follower = follower;
        this.following = following;
        this.articles = articles;

    }
}
