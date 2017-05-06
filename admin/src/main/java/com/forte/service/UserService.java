package com.forte.service;


import com.forte.model.User;

public interface UserService {
    void save(User user);

    User findByUsername(String username);
}
