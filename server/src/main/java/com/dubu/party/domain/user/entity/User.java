package com.dubu.party.domain.user.entity;

import com.dubu.party.common.file.Image;
import com.dubu.party.domain.article.entity.Article;
import com.dubu.party.domain.user.entity.data.Setting;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Builder @Entity
@Getter @Setter
@AllArgsConstructor // 모든 필드 값을 파라미터로 받는 생성자를 생성
@NoArgsConstructor // 파라미터가 없는 생성자를 생성
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // unique : 중복을 허용하지 않는다.
    @Column(unique = true)
    private String email;

    private String password;

    private String nickName;


    @Embedded
    private Setting setting;

    @Embedded
    private Image profileImage;


    @OneToMany(mappedBy = "follower", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default // builder를 사용할 때, 기본값으로 설정
    @JsonIgnore
    private List<Follow> follower = new ArrayList<>();

    @OneToMany(mappedBy = "following", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default // builder를 사용할 때, 기본값으로 설정
    @JsonIgnore
    private List<Follow> following = new ArrayList<>();


    // mappedBy : 연관관계의 주인이 아니다. DB에 컬럼을 만들지 마세요.
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @Builder.Default // builder를 사용할 때, 기본값으로 설정
    private List<Authority> roles = new ArrayList<>();

    public void setRoles(List<Authority> roles) {
        this.roles = roles;
        roles.forEach(o -> o.setUser(this));
    }
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @Builder.Default // builder를 사용할 때, 기본값으로 설정
    @JsonIgnore
    private List<Article> articles = new ArrayList<>();
}
