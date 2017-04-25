package com.fortegroup.service.accounts;

import com.fortegroup.model.accounts.Token;

/**
 * Simple service class for perform operation with tokens
 * @author Alexey Burov
 * @version 1.0
 */
public interface TokenService {

    String getToken(Token token);

    void saveToken(Token token);

}
