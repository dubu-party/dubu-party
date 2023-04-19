package com.dubu.party.domain.user.service;

import com.dubu.party.domain.user.db.entity.User;
import com.dubu.party.domain.user.db.entity.UserDto;
import com.dubu.party.domain.user.db.repository.UserRepository;
import com.dubu.party.domain.user.request.SignupForm;
import com.dubu.party.domain.user.request.UpdateUserForm;
import org.assertj.core.api.Assertions;
import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional // 롤백
class UserServiceTest {
    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    public User makeUser(String name) {
        SignupForm signupForm = new SignupForm();
        signupForm.setId("user"+name);
        signupForm.setPassword("1234");
        signupForm.setNickname("user"+name+name);
        signupForm.setEmail("beadf"+name+"@naver.com");
        signupForm.setPhone("010-"+name+"-1234");
        return signupForm.toEntity();
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
        User user = makeUser("5");
        Long saveId = userService.saveUser(user); // saveId = 1

        User findUser = userRepository.getById(saveId); // findUser = 1
        assertThat(user.getUserEmail()).isEqualTo(findUser.getUserEmail());
    }

    @Test
    void 전체조회() {
        User user1 = makeUser("1");
        User user2 = makeUser("2");
        User user3 = makeUser("3");
        userService.saveUser(user1);
        userService.saveUser(user2);
        userService.saveUser(user3);
        assertThat(userService.getAllUsers().size()).isEqualTo(3);
    }

    @Test
    void 개인조회() {
        User user1 = makeUser("1");
        userService.saveUser(user1);
        assertThat(userService.getUserByPkId(user1.getUserPkId())).isEqualTo(user1);
    }

    @Test
    void 회원삭제() {
        User user1= makeUser("1");
        userService.saveUser(user1);
        userService.deleteUser(user1.getUserPkId());
        assertThat(userService.getAllUsers().size()).isEqualTo(0);
    }

    @Test
    void 회원수정() {
        User user = makeUser("5");
        Long saveId = userService.saveUser(user); // saveId = 1

        Long pkId = user.getUserPkId();
        UpdateUserForm updateUserForm = updateUser("11");

        userService.updateUser(pkId,updateUserForm);

        assertThat(userService.getUserByPkId(pkId).getUserEmail()).isEqualTo("바꿨어요");
    }

    @Test
    void 비밀번호변경() {
        User user1 = makeUser("6");
        userService.saveUser(user1);
        userService.updatePassword(user1.getUserPkId(),"1324");
        assertThat(userService.getUserByPkId(user1.getUserPkId()).getUserPassword()).isEqualTo("1324");
    }
    @Test
    void 중복유저(){
        User user1 = makeUser("10");
        userService.saveUser(user1);
        User user2 = makeUser("10");
        assertThrows(ResponseStatusException.class, () -> {
            userService.saveUser(user2);
        });

    }
}