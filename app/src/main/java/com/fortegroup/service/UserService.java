package com.fortegroup.service;

import com.fortegroup.model.User;
import org.springframework.security.core.userdetails.UserDetails;

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
