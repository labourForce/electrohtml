package com.fortegroup.dao.accounts;

import com.fortegroup.model.accounts.User;

/**
 * Base userDao interface for {@link User}
 * @author Alexey Burov
 * @version 1.0
 */
public interface UserDao {
    User loadUserByUsername(String username);

    long saveUser(User user);

    User get(long id);

}
