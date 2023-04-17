package com.dubu.party.domain.user.db.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Getter @Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userPkId;

    private String userId;

    private String userPassword;

    private String userEmail;

    private String userNickname;

    private String userPhone;

    private Long userGameRoomId;

    private Long gameUserId;
    private Long roomId;
}
