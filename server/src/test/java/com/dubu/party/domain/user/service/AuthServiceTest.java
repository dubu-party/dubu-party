package com.dubu.party.domain.user.service;

import com.dubu.party.domain.user.repository.UserRepository;
import com.dubu.party.domain.user.request.CreateUserForm;
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
    public CreateUserForm signupUser() {
        CreateUserForm signupForm = new CreateUserForm();
        signupForm.setEmail("asdf@naver.com");
        signupForm.setPassword("qwer1234");
        signupForm.setNickname("user");
        signupForm.setInstagram("hohoho");
        return signupForm;
    }

    @Autowired
    AuthService authService;

    @Autowired
    UserRepository userRepository;


    @Test
    void 회원가입() throws Exception {
        Integer beforeUsers = userRepository.findAll().size();
        CreateUserForm user = signupUser();
        authService.register(user);
        Integer afterUsers = userRepository.findAll().size();
        assertThat(afterUsers).isEqualTo(beforeUsers+1);
    }

    @Test
    void 로그인성공() throws Exception{
        authService.register((signupUser()));
        LoginForm loginForm = new LoginForm("asdf@naver.com", "qwer1234");
        assertThat(authService.login(loginForm).getToken()).isNotNull();
    }

    @Test
    void 중복유저확인()throws Exception{
        CreateUserForm createUserForm = signupUser();
        authService.register(createUserForm);

        assertThrows(Exception.class, () -> {
            authService.register(createUserForm);
        });

    }


}