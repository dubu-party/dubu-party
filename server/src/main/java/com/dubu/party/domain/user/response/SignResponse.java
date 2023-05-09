package com.dubu.party.domain.user.response;

import com.dubu.party.domain.user.db.entity.User;
import lombok.*;

@Getter @Setter
@AllArgsConstructor // 모든 필드 값을 파라미터로 받는 생성자를 생성
@NoArgsConstructor // 파라미터가 없는 생성자를 생성
@Builder
public class SignResponse {

    private Long userPkId;
    private String userId;
    private String userNickname;
    private String userPhone;
    private String userEmail;
    private String token;

    public SignResponse(User user) {
        this.userPkId = user.getUserPkId();
        this.userId = user.getUserId();
        this.userNickname = user.getUserNickname();
        this.userPhone = user.getUserPhone();
        this.userEmail = user.getUserEmail();
    }
}
