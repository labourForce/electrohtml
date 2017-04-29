package com.fortegroup.controller.forfront;

import com.fortegroup.service.catalog.CatalogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * Main controller for the root path /
 * @author Artyom Kazakov
 * @version 1.0
 */
@Controller
public class HomeController {
    @Autowired
    private CatalogService catalogService;

    @RequestMapping(value = "/category/**", method = RequestMethod.GET)
    public String seo(HttpServletRequest request){
        String uri = request.getRequestURI();
        String[] parameters = uri.substring(uri.indexOf("category/") + 9).split("/");

        List<Object> entities = catalogService.getSeo(parameters, false);

        //  request.setAttribute("entities", entities);

        return "index";
    }

    @RequestMapping(value = "/c/*", method = RequestMethod.GET)
    public String categoryShortUrl(HttpServletRequest request){
        String uri = request.getRequestURI();
        String shortUrl = uri.substring(uri.indexOf("c/") + 2);

        List<Object> entities = catalogService.getSeoByShortUrl(shortUrl, false);

        //  request.setAttribute("entities", entities);

        return "index";
    }

    @RequestMapping(value = "/*",method = RequestMethod.GET)
    public String home() {
        return "index";
    }
}


















