package com.forte.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpSession;

@Controller
public class HomeController {

    @RequestMapping(value = "/**", method = RequestMethod.GET)
    public String home(HttpSession session) {
        if (session.getAttribute("userId") == null){
            return "login";
        } else {
            return "redirect:/admin";
        }
    }
}
