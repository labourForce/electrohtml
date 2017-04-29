package com.fortegroup.utill;

import com.fortegroup.model.accounts.Message;
import com.fortegroup.model.accounts.User;

/**
 * Simple factory for generate authentication request
 * @author Alex Burov
 * @version 1.0
 */
public final class MessageFactory {

    private MessageFactory() {
    }

    public static Message getMessage(String pMessage,boolean pIsError, User user,String token){
        if(user != null) {
            user.setPassword(null);
        }
        return new Message(pIsError,pMessage,user,token);
    }
}
