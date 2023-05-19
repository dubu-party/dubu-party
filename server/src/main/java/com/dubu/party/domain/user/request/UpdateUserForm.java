package com.dubu.party.domain.user.request;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@Getter @Setter
@NoArgsConstructor
public class UpdateUserForm {
    public String nickname;
    public String phoneNumber;
    public MultipartFile profileImage;

}
