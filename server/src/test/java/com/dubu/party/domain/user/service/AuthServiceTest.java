package com.dubu.party.domain.user.service;

import com.dubu.party.domain.user.db.repository.UserRepository;
import com.dubu.party.domain.user.request.AuthForm;
import com.dubu.party.domain.user.request.LoginForm;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;


@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional // 롤백
class AuthServiceTest {
    public AuthForm signupUser() {
        AuthForm signupForm = new AuthForm();
        signupForm.setId("test");
        signupForm.setPassword("qwer1234");
        signupForm.setNickname("user");
        signupForm.setEmail("asdf@naver.com");
        signupForm.setPhone("01012345678");
        return signupForm;
    }

    @Autowired
    AuthService authService;

    @Autowired
    UserRepository userRepository;


    @Test
    void 회원가입() throws Exception {
        Integer beforeUsers = userRepository.findAll().size();
        AuthForm user = signupUser();
        authService.register(user);
        Integer afterUsers = userRepository.findAll().size();
        assertThat(afterUsers).isEqualTo(beforeUsers+1);
    }

    @Test
    void 로그인성공() throws Exception{
        authService.register((signupUser()));
        LoginForm loginForm = new LoginForm("test", "qwer1234");
        assertThat(authService.login(loginForm).getToken()).isNotNull();
    }

    @Test
    void 중복유저확인()throws Exception{
        AuthForm authForm = signupUser();
        authService.register(authForm);

        assertThrows(Exception.class, () -> {
            authService.register(authForm);
        });

    }


}