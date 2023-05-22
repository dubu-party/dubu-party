package com.dubu.party.domain.user.service;

import com.dubu.party.domain.user.db.entity.UserDto;
import com.dubu.party.domain.user.db.repository.UserRepository;
import com.dubu.party.domain.user.request.CreateUserForm;
import com.dubu.party.domain.user.request.UpdateUserForm;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import static org.assertj.core.api.Assertions.assertThat;

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



    public CreateUserForm makeUser(String name) {
        CreateUserForm signupForm = new CreateUserForm();
        signupForm.setPassword("1234");
        signupForm.setNickname("user"+name+name);
        signupForm.setEmail("beadf"+name+"@naver.com");
        signupForm.setPhoneNumber("010-"+name+"-1234");
        return signupForm;
    }

    public UpdateUserForm updateUser(String name) {
        UpdateUserForm updateUserForm = new UpdateUserForm();
        updateUserForm.setNickname("user" + name + name);
        updateUserForm.setPhoneNumber("123123");
        return updateUserForm;
    }


    @Test
    void 전체조회() throws Exception {

        Integer BeforeUsers = userRepository.findAll().size();
        CreateUserForm user1 = makeUser("1");
        CreateUserForm user2 = makeUser("2");
        CreateUserForm user3 = makeUser("3");
        authService.register(user1);
        authService.register(user2);
        authService.register(user3);
        Integer AfterUsers = userRepository.findAll().size();
        assertThat(AfterUsers).isEqualTo(BeforeUsers+3);
    }

    @Test
    void 개인조회() throws Exception {
        CreateUserForm user1 = makeUser("1");
        Long id = authService.register(user1);
        UserDto userDto = userService.getUserById(id);
        assertThat(userDto.getId()).isEqualTo(id);
    }

    @Test
    void 회원삭제() throws Exception{
        Integer BeforeUsers = userService.getAllUsers().size();
        CreateUserForm user1= makeUser("1");
        Long id = authService.register(user1);
        UserDto userDto = userService.getUserById(id);
        assertThat(userService.getAllUsers().size()).isEqualTo(BeforeUsers+1);
    }

//    @Test
//    void 회원수정() throws Exception{
//
//        CreateUserForm user = makeUser("5");
//        Long id = authService.register(user); // saveId = 1
//        UpdateUserForm updateUserForm = updateUser("11");
//
//        UserDto userDto = userService.updateUser(id, updateUserForm);
//
//        assertThat(userDto.getPhoneNumber()).isEqualTo("123123");
//    }



}