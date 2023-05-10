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

    public User toUser(User user) {
        return user.builder()
                .userEmail(this.email)
                .userNickname(this.nickname)
                .userPhone(this.phone)
                .build();
    }
}
