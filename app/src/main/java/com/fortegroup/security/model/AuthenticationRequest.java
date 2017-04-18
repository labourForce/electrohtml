package com.fortegroup.security.model;

/**
 * Simple DTO model for parse json for Dto object to start Authenticate process
 * @author Alexey Burov
 * @version 1.0
 */

public class AuthenticationRequest {

    private String username;
    private String password;

    public AuthenticationRequest() {

    }

    public AuthenticationRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
