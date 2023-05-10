package com.dubu.party.domain.user.service;

import com.dubu.party.domain.user.db.entity.UserDto;
import com.dubu.party.domain.user.db.repository.UserRepository;
import com.dubu.party.domain.user.request.AuthForm;
import com.dubu.party.domain.user.request.UpdateUserForm;
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
class UserServiceTest {

    @Autowired
    private AuthService authService;

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;



    public AuthForm makeUser(String name) {
        AuthForm signupForm = new AuthForm();
        signupForm.setId("user"+name);
        signupForm.setPassword("1234");
        signupForm.setNickname("user"+name+name);
        signupForm.setEmail("beadf"+name+"@naver.com");
        signupForm.setPhone("010-"+name+"-1234");
        return signupForm;
    }

    public UpdateUserForm updateUser(String name) {
        UpdateUserForm updateUserForm = new UpdateUserForm();
        updateUserForm.setNickname("user" + name + name);
        updateUserForm.setEmail("바꿨어요");
        updateUserForm.setPhone("010-" + name + "-1234");
        return updateUserForm;
    }
    @Test
    void 회원가입() throws Exception {
        Integer beforeUsers = userRepository.findAll().size();
        AuthForm user = makeUser("5");
        authService.register(user);
        Integer afterUsers = userRepository.findAll().size();
        assertThat(afterUsers).isEqualTo(beforeUsers+1);
    }

    @Test
    void 전체조회() throws Exception {

        Integer BeforeUsers = userRepository.findAll().size();
        AuthForm user1 = makeUser("1");
        AuthForm user2 = makeUser("2");
        AuthForm user3 = makeUser("3");
        authService.register(user1);
        authService.register(user2);
        authService.register(user3);
        Integer AfterUsers = userRepository.findAll().size();
        assertThat(AfterUsers).isEqualTo(BeforeUsers+3);
    }

    @Test
    void 개인조회() throws Exception {
        AuthForm user1 = makeUser("1");
        authService.register(user1);
        UserDto userDto = userService.getUserById(user1.getId());
        assertThat(userDto.getId()).isEqualTo(user1.getId());
    }

    @Test
    void 회원삭제() throws Exception{
        Integer BeforeUsers = userService.getAllUsers().size();
        AuthForm user1= makeUser("1");
        authService.register(user1);
        UserDto userDto = userService.getUserById(user1.getId());
        userService.deleteUser(userDto.getPkId());
        assertThat(userService.getAllUsers().size()).isEqualTo(BeforeUsers);
    }

    @Test
    void 회원수정() throws Exception{

        AuthForm user = makeUser("5");
        authService.register(user); // saveId = 1
        UserDto userDto = userService.getUserById(user.getId());
        Long pkId = userDto.getPkId();

        UpdateUserForm updateUserForm = updateUser("11");

        userService.updateUser(pkId, updateUserForm);

//        assertThat(userService.getUserByPkId(pkId).getEmail()).isEqualTo("바꿨어요");
    }


    @Test
    void 중복유저()throws Exception{
        AuthForm user1 = makeUser("10");
        authService.register(user1);
        AuthForm user2 = makeUser("10");
        assertThrows(Exception.class, () -> {
            authService.register(user2);
        });

    }

}