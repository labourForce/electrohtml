
/**
 * Authentication filter it work with JWT(Json web token)
 * @author Alexey Burov
 * @version 1.0
 */

package com.fortegroup.filters;


import com.fortegroup.model.accounts.User;
import com.fortegroup.service.accounts.UserService;
import com.fortegroup.utill.Constant;
import com.fortegroup.utill.TokenUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.context.support.WebApplicationContextUtils;
import org.springframework.web.filter.GenericFilterBean;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Arrays;

@WebFilter("/**")
public class AuthenticationTokenFilter extends GenericFilterBean {

    @Autowired
    private TokenUtils tokenUtils;

    @Autowired
    private UserService userService;

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        tokenUtils = WebApplicationContextUtils
                .getRequiredWebApplicationContext(this.getServletContext())
                .getBean(TokenUtils.class);
        userService = WebApplicationContextUtils
                .getRequiredWebApplicationContext(this.getServletContext())
                .getBean(UserService.class);

        HttpServletResponse resp = (HttpServletResponse) response;
        resp.setHeader("Access-Control-Allow-Origin", "*");
        resp.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS, DELETE, PATCH");
        resp.setHeader("Access-Control-Max-Age", "3600");
        resp.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, " + Constant.tokenHeader);


        HttpServletRequest httpRequest = (HttpServletRequest) request;

        String authToken = httpRequest.getHeader(Constant.tokenHeader);
        String userName = tokenUtils.getUsernameFromToken(authToken);
        User user = this.userService.loadUserByUsername(userName);
        if(authToken == null) {
            Cookie[] cookies = httpRequest.getCookies();
            Cookie anonimId = null;
             try {
                 anonimId = Arrays.stream(cookies).
                         filter(cookie -> cookie.getName().equals("anonim"))
                         .findFirst().
                         get();
             }catch (Throwable e){
                 logger.error(e.toString(),e);
             }
            if(anonimId == null){
                Long id =
                        userService.saveUser(new User(null,null,"ROLE_ANONIM"));
                Cookie cookie = new Cookie("anonim",String.valueOf(id));
                cookie.setHttpOnly(true);
                resp.addCookie(cookie);
                httpRequest.setAttribute("id",id);
                httpRequest.setAttribute("role","ROLE_ANONIM");
            }else {
                User daoUser = userService.get(Long.valueOf(anonimId.getValue()));
                if(user!= null){
                    httpRequest.setAttribute("id",daoUser.getId());
                    httpRequest.setAttribute("role",daoUser.getAuthorities());
                }
            }

        }else if(user == null || tokenUtils.isTokenExpired(authToken)){
            resp.sendError(401);
        }else {
            httpRequest.setAttribute("id", user.getId());
            httpRequest.setAttribute("role", user.getAuthorities());
        }
        chain.doFilter(request, response);
    }




}

