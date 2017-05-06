package com.fortegroup.model.checkout;

public class Response {

    private String message;
    private boolean good;

    public Response() {
    }

    public Response(String message, boolean good) {
        this.message = message;
        this.good = good;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public boolean isGood() {
        return good;
    }

    public void setGood(boolean good) {
        this.good = good;
    }
}
