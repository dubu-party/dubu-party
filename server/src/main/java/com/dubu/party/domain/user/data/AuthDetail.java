package com.dubu.party.domain.user.data;

import com.dubu.party.domain.user.entity.User;
import lombok.*;

@Getter @Setter
@AllArgsConstructor // 모든 필드 값을 파라미터로 받는 생성자를 생성
@NoArgsConstructor // 파라미터가 없는 생성자를 생성
@Builder
public class AuthDetail {

    private Long id;
    private String email;
    private String nickName;
    private String phoneNumber;
    private String token;

    public AuthDetail(User user) {
        this.id = user.getId();
        this.email = user.getEmail();
        this.nickName = user.getNickName();
        this.phoneNumber = user.getPhoneNumber();
    }
}
