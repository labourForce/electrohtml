package com.fortegroup.model.checkout;

public class Response {

    private String message;
//    private String code;

    public Response() {
    }

    public Response(String message) {
        this.message = message;
//        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

//    public String getCode() {
//        return code;
//    }
//
//    public void setCode(String code) {
//        this.code = code;
//    }
}
