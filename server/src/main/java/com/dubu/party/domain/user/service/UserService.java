package com.dubu.party.domain.user.service;

import com.dubu.party.domain.user.db.entity.GameUser;
import com.dubu.party.domain.user.db.entity.User;
import com.dubu.party.domain.user.db.repository.GameUserRepository;
import com.dubu.party.domain.user.db.repository.UserRepository;
import com.dubu.party.domain.user.request.UpdateGameUserForm;
import com.dubu.party.domain.user.request.UpdateUserForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

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


    public void updateUser(Long userPkId, UpdateUserForm updateUserForm){
        User existingUser = userRepository.getById(userPkId);
        if (existingUser!=null){
            existingUser = updateUserForm.toEntity(existingUser);
        }
        userRepository.save(existingUser);
    }

    public void updatePassword(Long id,String password){
        User existingUSer = userRepository.getById(id);
        if (existingUSer != null) {
            existingUSer.setUserPassword(password);
        }
        userRepository.save(existingUSer);
    }


    public void validateDuplicate(User user){
        boolean isExistUser = userRepository.existsByUserId(user.getUserId());
        if (isExistUser){ // 이미 존재하는 ID라면?
            throw new ResponseStatusException(HttpStatus.CONFLICT, "이미 존재하는 ID입니다.");
        }
    }
}
