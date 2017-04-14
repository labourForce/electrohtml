package com.fortegroup.shop.util;

import com.fortegroup.shop.bean.User;
import com.fortegroup.shop.bean.dto.UserDto;

public final class UserMapper {

    private UserMapper(){}

    public static User userFromDto(UserDto userDto){
        if (userDto == null){
            return null;
        }
        User user = new User();
        user.setEmail(userDto.getEmail());
        user.setPassword(userDto.getPassword());
        return user;
    }
}
