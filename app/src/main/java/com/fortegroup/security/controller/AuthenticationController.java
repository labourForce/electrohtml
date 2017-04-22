package com.fortegroup.security.controller;

import com.fortegroup.model.User;
import com.fortegroup.security.TokenUtils;
import com.fortegroup.security.model.AuthenticationRequest;
import com.fortegroup.security.model.Message;
import com.fortegroup.security.utill.MessageFactory;
import com.fortegroup.security.utill.Validator;
import com.fortegroup.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Controller for some operations with Accounts
 * it include methods for register User,Sing in User , Refresh Token and logout
 * @author Alexey Burov
 * @version 1.0
 */
@RestController
@RequestMapping("/rest/account")
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenUtils tokenUtils;

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/signIn",method = RequestMethod.POST)
    public ResponseEntity<?> authenticationRequest(@RequestBody AuthenticationRequest authenticationRequest,
                                                   HttpServletResponse response)
            throws AuthenticationException {
        try {

            // Perform the authentication
            Authentication authentication = this.authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            authenticationRequest.getUsername(),
                            authenticationRequest.getPassword()
                    )
            );
            SecurityContextHolder.getContext().setAuthentication(authentication);
            // Reload password post-authentication so we can generate token
            UserDetails userDetails = this.userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
            String token = this.tokenUtils.generateToken(userDetails);


            // Return the token
            Cookie cookie = new Cookie("token",token);
            cookie.setHttpOnly(true);
            response.addCookie(cookie);
            return ResponseEntity.ok(MessageFactory.getMessage("All success",false));
        }catch (BadCredentialsException e){
            return ResponseEntity.ok(MessageFactory.getMessage("Incorrect email or password",true));
        }
    }


    @RequestMapping(value = "/register",method = RequestMethod.POST)
    public ResponseEntity<?> registerRequest(@RequestBody User user){
        try {
            if(!Validator.validateEmail(user.getUsername()) || !Validator.validatePassword(user.getPassword()))
                return ResponseEntity.ok(MessageFactory.getMessage("Your fields not valid",true));
            User registeredUser = userService.saveUser(user);

            return ResponseEntity.ok(MessageFactory.getMessage("User successfully registered",false));
        }catch (Throwable e){
            return ResponseEntity.ok(MessageFactory.getMessage("Something wrong",true));

        }
    }

    @RequestMapping(value = "/checkEmail",method = RequestMethod.POST)
    public ResponseEntity<?> checkEmail(@RequestBody User user){
        if(user.getUsername() != null){
            User daoUser = userService.loadUserByUsername(user.getUsername());
            Message msg;
            if(daoUser != null){
                msg = MessageFactory.getMessage
                        ("This is email exist",true);
            }else {
                msg = MessageFactory.getMessage
                        ("This email not exist",false);
            }
            return ResponseEntity.ok(msg);

        }
        else
            return ResponseEntity.ok(MessageFactory.getMessage
                    ("Email must be not null",true));

    }

    @RequestMapping(value = "/logout",method = RequestMethod.POST)
    public ResponseEntity<?> logout(HttpServletResponse response){
        Cookie cookie = new Cookie("token","");
        cookie.setHttpOnly(true);
        response.addCookie(cookie);
        return ResponseEntity.ok(MessageFactory.getMessage("User successfully logout",false));
    }

}
