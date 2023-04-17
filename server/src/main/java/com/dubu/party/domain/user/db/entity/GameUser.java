package com.dubu.party.domain.user.db.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
@Getter @Setter
public class GameUser {
    @Id
    private Long gameUserId;
    private String gameUserNickName;
    private String gameUserImg;
    private Integer gameUserScore;

    // private Long gameUserLogId
    @OneToOne
    @JoinColumn(name = "game_user_id")
    private User user;
}
