package com.dubu.party.domain.user.db.entity;

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
    private Long userPkId;

    private String userId;

    private String userPassword;

    private String userEmail;

    private String userNickname;

    private String userPhone;



    // mappedBy : 연관관계의 주인이 아니다. (난 FK가 아니에요) DB에 컬럼을 만들지 마세요.
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @Builder.Default // builder를 사용할 때, 기본값으로 설정
    private List<Authority> roles = new ArrayList<>();

    public void setRoles(List<Authority> roles) {
        this.roles = roles;
        roles.forEach(o -> o.setUser(this));
    }
    
}
