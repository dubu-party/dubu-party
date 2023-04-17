package com.dubu.party.domain.user.db.entity;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Getter @Setter
public class UserDto {
    private String id;
    private String password;
    private String email;
    private String nickname;
    private String phone;

    public User toEntity(){
        User user = new User();
        user.setUserId(this.id);
        user.setUserPassword(this.password);
        user.setUserEmail(this.email);
        user.setUserNickname(this.nickname);
        user.setUserPhone(this.phone);
        return user;
    }

}