package com.dubu.party.domain.user.data;

import com.dubu.party.common.file.Image;
import com.dubu.party.domain.article.data.article.ArticleDto;
import com.dubu.party.domain.user.entity.User;
import com.dubu.party.domain.user.entity.data.Setting;
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

    private String description;
    private String profileUrl;

    private List<UserSimplify> follower;

    private List<UserSimplify> following;

    private List<ArticleDto> articles;

    private Setting setting;


    public UserDetail(User user, List<UserSimplify> follower, List<UserSimplify> following, List<ArticleDto> articles){
        this.id = user.getId();
        this.email = user.getEmail();
        this.nickname = user.getNickName();
        this.setting = user.getSetting();
        this.description = user.getDescription();
        // 이미지 처리
        Image image = user.getProfileImage();
        if(image != null){
            this.profileUrl = user.getProfileImage().getFileUrl();
        }

        this.follower = follower;
        this.following = following;
        this.articles = articles;

    }
}
