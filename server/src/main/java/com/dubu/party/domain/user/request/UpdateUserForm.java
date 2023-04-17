package com.dubu.party.domain.user.request;

import com.dubu.party.domain.user.db.entity.User;
import com.dubu.party.domain.user.db.entity.UserDto;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class UpdateUserForm {
    // email,nickname, phone
    public String email;
    public String nickname;
    public String phone;

    public User toEntity(User user){
        user.setUserEmail(this.email);
        user.setUserNickname(this.nickname);
        user.setUserPhone(this.phone);

        return user;
    }
}
