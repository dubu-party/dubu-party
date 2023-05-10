package com.dubu.party.domain.user.request;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class AuthForm {
    private String id;
    private String password;
    private String nickname;
    private String phone;
    private String email;

}
