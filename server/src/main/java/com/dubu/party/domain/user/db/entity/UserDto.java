package com.dubu.party.domain.user.db.entity;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.ReadOnlyProperty;

@Getter @Setter
@NoArgsConstructor
public class UserDto {
    private Long pkId;
    private String id;
    private String email;
    private String nickname;
    private String phone;


    public User toEntity(){
        User user = new User();
        user.setUserPkId(this.pkId);
        user.setUserEmail(this.email);
        user.setUserNickname(this.nickname);
        user.setUserPhone(this.phone);
        return user;
    }
    public UserDto(User user){
        this.pkId = user.getUserPkId();
        this.id = user.getUserId();
        this.email = user.getUserEmail();
        this.nickname = user.getUserNickname();
        this.phone = user.getUserPhone();
    }


}