package com.dubu.party.domain.user.data;
import com.dubu.party.common.file.Image;
import com.dubu.party.domain.user.entity.User;
import lombok.*;

import java.util.List;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserSimplify {
    private Long id;
    private String nickname;

    private String profileUrl;

    public UserSimplify(User user){
        this.id = user.getId();
        this.nickname = user.getNickName();
        Image image = user.getProfileImage();
        if(image != null){
            this.profileUrl = user.getProfileImage().getFileUrl();
        }
    }

    public static List<UserSimplify> listOf(List<User> users){
        List<UserSimplify> userSimplifies = new java.util.ArrayList<>();
        users.forEach(o -> userSimplifies.add(new UserSimplify(o)));
        return userSimplifies;
    }
}