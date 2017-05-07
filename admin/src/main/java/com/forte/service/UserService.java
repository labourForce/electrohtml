package com.forte.service;


import com.forte.dto.UserDTO;
import com.forte.model.User;

public interface UserService {

    User getByUsername(String username);

    User get(Integer userId);
}
