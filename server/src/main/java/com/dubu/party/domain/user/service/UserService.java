package com.dubu.party.domain.user.service;

import com.dubu.party.domain.user.db.entity.User;
import com.dubu.party.domain.user.db.entity.UserDto;
import com.dubu.party.domain.user.db.repository.UserRepository;
import com.dubu.party.domain.user.request.UpdateUserForm;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public Long saveUser(User user)  {
        validateDuplicate(user);
        userRepository.save(user);
        return user.getUserPkId();
    }

    public List<UserDto> getAllUsers(){
        List<User> users = userRepository.findAll();

        List<UserDto> userDtos = users.stream()
                .map(user -> new UserDto(user))
                .collect(Collectors.toList());

        return userDtos;
    }
    public UserDto getUserByPkId(Long pkId) {
        User user =  userRepository.findById(pkId).orElse(null);
        if(user == null){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "해당 유저를 찾을 수 없습니다.");
        }
        return new UserDto(user);
    }
    public boolean deleteUser(Long pkId){
        User user =  userRepository.findById(pkId).orElse(null);
        if(user == null){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "해당 유저를 찾을 수 없습니다.");
        }
        userRepository.deleteById(pkId);
        return true;
    }

    public UserDto getUserById(String userId) {
        User user =  userRepository.findByUserId(userId).orElse(null);
        if(user == null){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "해당 유저를 찾을 수 없습니다.");
        }
        return new UserDto(user);
    }


    public UserDto updateUser(Long pkId, UpdateUserForm updateUserForm){
        User user =userRepository.findById(pkId).orElse(null);
        if(user == null){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "해당 유저를 찾을 수 없습니다.");
        }
        User newUser = updateUserForm.toUser(user);

        userRepository.save(newUser);
        return this.getUserByPkId(pkId);
    }

    public void updatePassword(Long pkId,String password){
        User existingUSer = userRepository.getById(pkId);
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
