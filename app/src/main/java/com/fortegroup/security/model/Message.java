package com.fortegroup.security.model;

/**
 * Simple Response pojo object for return result for our operation @see{@link com.fortegroup.security.utill.MessageFactory}
 * @author Alexey Burov
 * @version 1.0
 */
public class Message {
    private boolean isError;
    private String message;
    private String token;

    public Message() {
    }

    public Message(boolean isError, String message, String token) {
        this.isError = isError;
        this.message = message;
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

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
