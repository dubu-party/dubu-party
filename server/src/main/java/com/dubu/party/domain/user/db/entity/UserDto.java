package com.dubu.party.domain.user.db.entity;
import com.dubu.party.common.file.Image;
import lombok.*;

import java.util.List;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserDto {
    private Long id;
    private String email;
    private String nickname;
    private String phoneNumber;

    private String profileUrl;

    public UserDto(User user){
        this.id = user.getId();
        this.email = user.getEmail();
        this.nickname = user.getNickName();
        this.phoneNumber = user.getPhoneNumber();
        Image image = user.getProfileImage();
        if(image != null){
            this.profileUrl = user.getProfileImage().getFileUrl();
        }
    }

    public static List<UserDto> listOf(List<User> users){
        List<UserDto> userDtos = new java.util.ArrayList<>();
        users.forEach(o -> userDtos.add(new UserDto(o)));
        return userDtos;
    }
}