package com.fortegroup.utill;

import com.fortegroup.model.accounts.Message;
import com.fortegroup.model.accounts.User;

/**
 * Created by alex on 16.4.17.
 */
public final class MessageFactory {

    private MessageFactory() {
    }

    public static Message getMessage(String pMessage, boolean pIsError, User pUser,String token){
        if(pUser!=null) {
            pUser.setPassword(null);
        }
        return new Message(pIsError,pMessage,pUser,token);
    }
}
