package com.dubu.party.domain.user.db.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter @Setter
public class GameUser {
    @Id
    private Long userId;
    private String gameUserNickName;
    private String gameUserImg;
    private Integer gameUserScore;

    // private Long gameUserLogId
    @OneToOne
    @JsonIgnore
    @JoinColumn(name = "user_id")
    @MapsId // User의 PK를 외래키로 참조합니다.
    public User user;
    



}
