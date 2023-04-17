package com.dubu.party.domain.user.db.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter @Setter
public class GameUser {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long gameUserId;
    private String gameUserNickName;
    private String gameUserImg;
    private Integer gameUserScore;

    // private Long gameUserLogId
    @OneToOne
    @JsonIgnore
    @JoinColumn(name = "user_id")
    public User user;

}
