package com.forte.service;

import com.forte.dto.UserDTO;
import com.forte.model.User;
import com.forte.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Override
    @Transactional
    public User getByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public User get(Integer userId) {
        return userRepository.getOne(userId);
    }


}
