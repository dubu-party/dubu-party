package com.dubu.party.domain.user.service;

import com.dubu.party.domain.user.db.entity.User;
import com.dubu.party.domain.user.db.entity.UserDto;
import com.dubu.party.domain.user.db.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Member;
import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public Long saveUser(User user) {
        validateDuplicate(user);
        userRepository.save(user);
        return user.getUserPkId();
    }


    public List<User> getAllUsers(){
        return userRepository.findAll();
    }
    public User getUserByPkId(Long id) {
        return userRepository.findById(id).orElse(null);
    }
    public void deleteUser(Long id){
        userRepository.deleteById(id);
    }


    public void updateUser(Long id, User user){
        User existingUSer = userRepository.getById(id);
        if (existingUSer!=null){
            existingUSer.setUserEmail(user.getUserEmail());
            existingUSer.setUserNickname(user.getUserNickname());
            existingUSer.setUserPhone(user.getUserPhone());
        }
        userRepository.save(existingUSer);
    }

    public void updatePassword(Long id,String password){
        User existingUSer = userRepository.getById(id);
        if (existingUSer != null) {
            existingUSer.setUserPassword(password);
        }
        userRepository.save(existingUSer);
    }


    public void validateDuplicate(User user){
        User findUser = userRepository.findByUserId(user.getUserId());
        if (findUser != null){
            throw new IllegalStateException("이미 존재하는 ID입니다.");
        }
    }
}
