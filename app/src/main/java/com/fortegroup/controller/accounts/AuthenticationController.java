package com.fortegroup.controller.accounts;

import com.fortegroup.model.accounts.User;
import com.fortegroup.utill.Constant;
import com.fortegroup.utill.TokenUtils;
import com.fortegroup.model.accounts.AuthenticationRequest;
import com.fortegroup.model.accounts.Message;
import com.fortegroup.utill.MessageFactory;
import com.fortegroup.utill.Validator;
import com.fortegroup.service.accounts.UserService;
import com.sun.javafx.fxml.expression.Expression;
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
    private TokenUtils tokenUtils;


    @Autowired
    private UserService userService;

    @RequestMapping(value = "/signIn",method = RequestMethod.POST)
    public ResponseEntity<?> authenticationRequest(@RequestBody AuthenticationRequest authenticationRequest) {
        try {

            User user = userService.loadUserByUsername(authenticationRequest.getUsername());
            String token = this.tokenUtils.generateToken(user);



            return ResponseEntity.ok(MessageFactory.getMessage("All success",false, user,token));
        }catch (BadCredentialsException e){
            return ResponseEntity.ok(MessageFactory.getMessage("Incorrect email or password",true, null,null));
        }
    }


    @RequestMapping(value = "/register",method = RequestMethod.POST)
    public ResponseEntity<?> registerRequest(@RequestBody User user){
        try {
            if(!Validator.validateEmail(user.getUsername()) || !Validator.validatePassword(user.getPassword()))
                return ResponseEntity.ok(MessageFactory.getMessage("Your fields not valid",true,null,null));
            userService.saveUser(user);

            return ResponseEntity.ok(MessageFactory.getMessage("User successfully registered",false, null,null));
        }catch (Throwable e){
            return ResponseEntity.ok(MessageFactory.getMessage("Something wrong",true, null,null));

        }
    }

    @RequestMapping(value = "/checkEmail",method = RequestMethod.POST)
    public ResponseEntity<?> checkEmail(@RequestBody User user){
        if(user.getUsername() != null){
            User daoUser = userService.loadUserByUsername(user.getUsername());
            Message msg;
            if(daoUser != null){
                msg = MessageFactory.getMessage
                        ("This is email exist",true,null,null);
            }else {
                msg = MessageFactory.getMessage
                        ("This email not exist",false,null,null);
            }
            return ResponseEntity.ok(msg);

        }
        else
            return ResponseEntity.ok(MessageFactory.getMessage
                    ("Email must be not null",true,null,null));

    }

    @RequestMapping(value = "/info", method = RequestMethod.GET)
    public ResponseEntity<?> info(HttpServletRequest request){
        String token = request.getHeader(Constant.tokenHeader);
        String userName = tokenUtils.getUsernameFromToken(token);
        User user = userService.loadUserByUsername(userName);
        user.setPassword(null);
        return ResponseEntity.ok(user);
    }

    @RequestMapping(value = "/refresh",method = RequestMethod.GET)
    public ResponseEntity<?> refreshToken(HttpServletRequest request){
        String token = request.getHeader(Constant.tokenHeader);
        String userName = tokenUtils.getUsernameFromToken(token);
        User user = userService.loadUserByUsername(userName);
        if(user != null){
            String newToken = tokenUtils.refreshToken(token);
            return ResponseEntity.ok(
                    MessageFactory.
                        getMessage
                            ("Token successfully refreshed",false,user,newToken));
        }

        return ResponseEntity.status(401).body("Token not valid");

    }

}
