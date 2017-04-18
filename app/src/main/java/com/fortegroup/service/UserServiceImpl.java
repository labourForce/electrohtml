package com.fortegroup.service;

import com.fortegroup.dao.UserDao;
import com.fortegroup.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Base implementation for {@link UserService} interface
 * @author Alexey Burov
 * @version 1.0
 */
@Service(value = "appUserService")
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    @Autowired
    BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    @Transactional
    public User loadUserByUsername(String username) {
        return userDao.loadUserByUsername(username);
    }

    @Transactional
    @Override
    public User saveUser(User user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        Long id =  userDao.saveUser(user);
        return get(id);
    }

    @Transactional
    @Override
    public User get(long id) {
        return userDao.get(id);
    }

}
