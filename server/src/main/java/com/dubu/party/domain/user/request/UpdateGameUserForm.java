package com.dubu.party.domain.user.request;


import com.dubu.party.domain.user.db.entity.GameUser;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class UpdateGameUserForm{
    private String gameUserNickname;
    private String gameUserImg;

    public GameUser toEntity(Long userPkId){
        GameUser gameUser = new GameUser(userPkId);
        gameUser.setGameUserNickName(this.gameUserNickname);
        gameUser.setGameUserImg(this.gameUserImg);
        return gameUser;
    }

}
