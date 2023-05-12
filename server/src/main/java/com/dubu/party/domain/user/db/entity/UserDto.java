package com.dubu.party.domain.user.db.entity;
import lombok.*;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserDto {
    private Long pkId;
    private String id;
    private String email;
    private String nickname;
    private String phone;

    public UserDto(User user){
        this.pkId = user.getUserPkId();
        this.id = user.getUserId();
        this.email = user.getUserEmail();
        this.nickname = user.getUserNickname();
        this.phone = user.getUserPhone();
    }

    public static UserDto getDefaultUserDto(){
        return UserDto.builder()
                .pkId(0L)
                .id("")
                .email("")
                .nickname("")
                .phone("")
                .build();
    }

}