package com.fortegroup.shop.controller;

import com.fortegroup.shop.bean.User;
import com.fortegroup.shop.bean.dto.UserDto;
import com.fasterxml.jackson.annotation.JsonInclude;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.fortegroup.shop.service.UserService;
import com.fortegroup.shop.util.UserMapper;

@RestController
@RequestMapping(value = "/user")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public User register(@RequestBody UserDto dto) {
        User user = UserMapper.userFromDto(dto);
        return userService.save(user);
    }

}
