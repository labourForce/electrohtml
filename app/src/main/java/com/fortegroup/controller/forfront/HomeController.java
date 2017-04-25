package com.fortegroup.controller.forfront;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

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


















