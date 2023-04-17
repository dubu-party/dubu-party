package com.dubu.party.domain.user.db.entity;


import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.ReadOnlyProperty;

@Getter @Setter
public class UserDto {

    private String email;
    private String nickname;
    private String phone;

    @ReadOnlyProperty
    private String id;

    public User toEntity(User user){
        user.setUserEmail(this.email);
        user.setUserNickname(this.nickname);
        user.setUserPhone(this.phone);
        return user;
    }

    public User toEntity(){
        User user = new User();
        user.setUserEmail(this.email);
        user.setUserNickname(this.nickname);
        user.setUserPhone(this.phone);
        return user;
    }

}