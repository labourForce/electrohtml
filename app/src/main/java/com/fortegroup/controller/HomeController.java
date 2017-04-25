package com.fortegroup.controller;

import com.fortegroup.model.User;
import com.fortegroup.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Main controller for the root path /
 * @author Alexey Burov
 * @version 1.0
 */
@Controller
public class HomeController {
    @RequestMapping(value = "/*",method = RequestMethod.GET)
    public String home() {
        return "index";
    }
}


















