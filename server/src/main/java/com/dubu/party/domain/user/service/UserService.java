package com.dubu.party.domain.user.service;

import com.dubu.party.common.file.Image;
import com.dubu.party.domain.article.data.article.ArticleDto;
import com.dubu.party.domain.article.service.ArticleService;
import com.dubu.party.domain.user.data.AuthDetail;
import com.dubu.party.domain.user.entity.User;
import com.dubu.party.domain.user.data.UserSimplify;
import com.dubu.party.domain.user.repository.UserRepository;
import com.dubu.party.domain.user.request.UpdateUserForm;
import com.dubu.party.domain.user.data.UserDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ArticleService articleService;


    @Autowired
    private FollowService followService;

    public AuthDetail saveUser(User user)  {
        validateDuplicate(user);
        userRepository.save(user);
        return new AuthDetail(user);
    }

    public UserDetail getUserDetail (Long id) {
        User user =  userRepository.findById(id).orElse(null);
        if(user == null){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "해당 유저를 찾을 수 없습니다.");
        }
        return new UserDetail(user,followService.getFollowers(id),followService.getFollowings(id),articleService.getArticlesByUser(id));
    }

    public List<UserSimplify> getAllUsers(){
        List<User> users = userRepository.findAll();

        List<UserSimplify> userSimplifies = users.stream()
                .map(user -> new UserSimplify(user))
                .collect(Collectors.toList());

        return userSimplifies;
    }
    public UserSimplify getUserById(Long id) {
        User user =  userRepository.findById(id).orElse(null);
        if(user == null){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "해당 유저를 찾을 수 없습니다.");
        }
        return new UserSimplify(user);
    }

    public UserDetail getInfo(Long userId) {
        User user =  userRepository.findById(userId).orElse(null);
        if(user == null){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "해당 유저를 찾을 수 없습니다.");
        }


        List<UserSimplify> follower = followService.getFollowers(userId);

        List<UserSimplify> following = followService.getFollowings(userId);

        List<ArticleDto> articles = articleService.getArticlesByUser(user.getId());

        return new UserDetail(user,follower,following,articles);
    }

    public UserSimplify getUserById(String userId) {
        User user =  userRepository.findByEmail(userId).orElse(null);
        if(user == null){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "해당 유저를 찾을 수 없습니다.");
        }
        return new UserSimplify(user);
    }


    public UserSimplify updateUser(Long id, UpdateUserForm updateUserForm)throws Exception{
        User user =userRepository.findById(id).orElse(null);
        if(user == null){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "해당 유저를 찾을 수 없습니다.");
        }
        user.setNickName(updateUserForm.getNickname());
        user.setPhoneNumber(updateUserForm.getPhoneNumber());


        MultipartFile file = updateUserForm.getProfileImage();
        if (file != null) {
            Image image = new Image(file);
            user.setProfileImage(image);
        }
        userRepository.save(user);
        return this.getUserById(id);
    }

    public void updatePassword(Long id,String password){
        User existingUSer = userRepository.getById(id);
        if (existingUSer != null) {
            existingUSer.setPassword(password);
        }
        userRepository.save(existingUSer);
    }


    public void validateDuplicate(User user){
        boolean isExistUser = userRepository.existsByEmail(user.getEmail());
        if (isExistUser){ // 이미 존재하는 ID라면?
            throw new ResponseStatusException(HttpStatus.CONFLICT, "이미 존재하는 ID입니다.");
        }
    }


}
