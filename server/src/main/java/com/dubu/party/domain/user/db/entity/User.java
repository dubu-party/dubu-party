package com.dubu.party.domain.user.db.entity;

import com.dubu.party.common.file.Image;
import com.dubu.party.domain.article.db.entity.Article;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
@Builder
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

    private String phoneNumber;

    @Embedded
    private Image profileImage;


    // mappedBy : 연관관계의 주인이 아니다. DB에 컬럼을 만들지 마세요.
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @Builder.Default // builder를 사용할 때, 기본값으로 설정
    private List<Authority> roles = new ArrayList<>();

    public void setRoles(List<Authority> roles) {
        this.roles = roles;
        roles.forEach(o -> o.setUser(this));
    }
    
}
