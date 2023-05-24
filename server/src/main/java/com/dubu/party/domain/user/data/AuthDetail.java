package com.dubu.party.domain.user.data;

import com.dubu.party.common.file.Image;
import com.dubu.party.domain.user.entity.User;
import com.dubu.party.domain.user.entity.data.Setting;
import lombok.*;

@Getter @Setter
@AllArgsConstructor // 모든 필드 값을 파라미터로 받는 생성자를 생성
@NoArgsConstructor // 파라미터가 없는 생성자를 생성
@Builder
public class AuthDetail {

    private Long id;
    private String email;
    private String nickName;
    private String instagram;

    private Setting setting;
    private String token;

    private String profileUrl;

    public AuthDetail(User user) {
        this.id = user.getId();
        this.email = user.getEmail();
        this.nickName = user.getNickName();
        this.instagram = user.getInstagram();
        this.setting = user.getSetting();
        Image image = user.getProfileImage();
        if(image != null){
            this.profileUrl = user.getProfileImage().getFileUrl();
        }
    }
}
