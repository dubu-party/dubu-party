package com.dubu.party.domain.user.request;
import com.dubu.party.domain.user.db.entity.User;
import com.dubu.party.domain.user.db.entity.UserDto;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class SignupForm extends UserDto {
    // id, password, email,nickname, phone, gameUserNickname, gameUserImg
    private String id;
    private String password;


    public User toEntity(){ // UserDto의 toEntity를 오버라이딩
        // id 와 패스워드를 추가로 설정해준다.
        User user = super.toEntity();
        user.setUserId(this.id);
        user.setUserPassword(this.password);
        return user;
    }
}
