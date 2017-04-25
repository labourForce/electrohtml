package com.fortegroup.service.accounts;

import com.fortegroup.model.accounts.User;
import com.fortegroup.model.accounts.SpringSecurityUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

/**
 * Base implementation for {@link UserDetailsService} interface
 * @author Alexey Burov
 * @version 1.0
 */

@Service(value = "userDetailsService")
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserService userService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = this.userService.loadUserByUsername(username);

        if (user == null) {
            throw new UsernameNotFoundException(String.format("No user found with username '%s'.", username));
        } else {
            return new SpringSecurityUser(
                    user.getId(),
                    user.getUsername(),
                    user.getPassword(),
                    null,
                    null,
                    AuthorityUtils.commaSeparatedStringToAuthorityList(user.getAuthorities())
            );
        }
    }


}
