package com.dubu.party.domain.user.request;
import com.dubu.party.domain.user.db.entity.GameUser;
import com.dubu.party.domain.user.db.entity.User;
import com.dubu.party.domain.user.db.entity.UserDto;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class SignupForm extends UserDto {
    public String gameUserNickname;
    public String gameUserImg;


    public User toEntity(){
        User user = super.toEntity();
        GameUser gameUser = new GameUser();
        gameUser.setGameUserNickName(this.gameUserNickname);
        gameUser.setGameUserImg(this.gameUserImg);
        gameUser.setUser(user);
        user.setGameUser(gameUser);

        return user;
    }
}
