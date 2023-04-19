package com.dubu.party.domain.user.service;

import com.dubu.party.domain.user.db.entity.GameUser;
import com.dubu.party.domain.user.db.repository.GameUserRepository;
import com.dubu.party.domain.user.request.UpdateGameUserForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GameUserService {

    @Autowired
    private GameUserRepository gameUserRepository;
    public void updateGameUser(Long userPkId, UpdateGameUserForm updateGameUserForm){
        GameUser existingUser = gameUserRepository.getById(userPkId);
        if (existingUser != null) {
            existingUser = updateGameUserForm.toEntity(userPkId);
        }
        gameUserRepository.save(existingUser);
    }
}
