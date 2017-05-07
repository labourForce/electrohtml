package com.forte.controller;

import com.forte.dto.UserDTO;
import com.forte.model.User;
import com.forte.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpSession;

@Controller
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public String login(Model model, UserDTO userDto, HttpSession session) {

        User user = userService.getByUsername(userDto.getUsername());

        if (user != null && bCryptPasswordEncoder.matches(userDto.getPassword(), user.getPassword())){
            model.addAttribute("user", user);
            session.setAttribute("userId", user.getId());
            return "admin";
        } else {
            model.addAttribute("error", "Wrong login or password.");
            return "login";
        }

    }

    @RequestMapping(value = "/logout", method = RequestMethod.POST)
    public String logout(HttpSession session) {
        if (session.getAttribute("userId") != null){
            session.removeAttribute("userId");
        }

        return "login";
    }

}
