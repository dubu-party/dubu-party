package com.dubu.party.domain.user.response;

import com.dubu.party.domain.user.db.entity.User;
import lombok.*;

@Getter @Setter
@AllArgsConstructor // 모든 필드 값을 파라미터로 받는 생성자를 생성
@NoArgsConstructor // 파라미터가 없는 생성자를 생성
@Builder
public class AuthResponse {

    private Long id;
    private String email;
    private String nickName;
    private String phoneNumber;
    private String token;

    public AuthResponse(User user) {
        this.id = user.getId();
        this.email = user.getEmail();
        this.nickName = user.getNickName();
        this.phoneNumber = user.getPhoneNumber();
    }
}
