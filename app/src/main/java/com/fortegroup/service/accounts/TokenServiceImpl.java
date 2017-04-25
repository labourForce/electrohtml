package com.fortegroup.service.accounts;

import com.fortegroup.dao.accounts.TokenDao;
import com.fortegroup.model.accounts.Token;
import com.fortegroup.service.accounts.TokenService;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * Implementation for {@link TokenService} interface
 * for perform operations with tokens
 * @author Alexey Burov
 * @version 1.0
 */
public class TokenServiceImpl implements TokenService {


    @Override
    public String getToken(Token token) {
        return null;
    }

    @Override
    public void saveToken(Token token) {

    }
}
