package com.dubu.party.domain.user.request;

import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@Getter @Setter
public class CreateUserForm {
    private String email;
    private String password;
    private String nickname;
    private String phoneNumber;
    private MultipartFile profileImage;

}
