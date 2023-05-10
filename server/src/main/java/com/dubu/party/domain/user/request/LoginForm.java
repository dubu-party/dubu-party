package com.dubu.party.domain.user.request;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class LoginForm {

    private String id;
    private String password;

}
