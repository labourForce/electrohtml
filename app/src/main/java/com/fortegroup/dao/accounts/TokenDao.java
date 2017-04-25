package com.fortegroup.dao.accounts;

import com.fortegroup.model.accounts.Token;

/**
 * Base token dao to logout system
 * @author Alexey Burov
 * @version 1.0
 */
public interface TokenDao {

    String getToken(Token token);

    void saveToken(Token token);
}
