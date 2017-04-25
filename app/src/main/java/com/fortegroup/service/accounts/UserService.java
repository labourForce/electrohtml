package com.fortegroup.service.accounts;

import com.fortegroup.model.accounts.User;

/**
 * Simple service interface for add method contract for service operations with {@link User}
 * @author Alexey Burov
 * @version 1.0
 */
public interface UserService {
    User loadUserByUsername(String username);

    User  saveUser(User user);

    User get(long id);

}
