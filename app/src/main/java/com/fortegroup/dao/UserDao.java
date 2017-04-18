package com.fortegroup.dao;

import com.fortegroup.model.User;

/**
 * Base userDao interface for {@link com.fortegroup.model.User}
 * @author Alexey Burov
 * @version 1.0
 */
public interface UserDao {
    User loadUserByUsername(String username);

    long saveUser(User user);

    User get(long id);

}
