package com.fortegroup.model.accounts;

import com.fortegroup.utill.MessageFactory;

/**
 * Simple Response pojo object for return result for our operation @see{@link MessageFactory}
 * @author Alexey Burov
 * @version 1.0
 */
public class Message {
    private boolean isError;
    private String message;
    private User user;
    private String token;

    public Message() {
    }

    public Message(boolean isError, String message,User user,String token) {
        this.isError = isError;
        this.message = message;
        this.user = user;
        this.token = token;
    }


    public boolean isError() {
        return isError;
    }

    public void setError(boolean error) {
        isError = error;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
