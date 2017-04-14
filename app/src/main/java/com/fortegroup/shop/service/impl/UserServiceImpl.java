package com.fortegroup.shop.service.impl;

import com.fortegroup.shop.bean.User;
import com.fortegroup.shop.dao.UserDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.fortegroup.shop.service.UserService;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserDAO userDAO;

    @Override
    public User save(User user) {
        return userDAO.save(user);
    }
}
