package com.fortegroup.dao.accounts;

import com.fortegroup.model.accounts.Token;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * Base implementation for {@link TokenDao} interface
 * @author Alexey Burov
 * @version 1.0
 */
public class TokenDaoImpl implements TokenDao{
    private static final Logger logger = LoggerFactory.getLogger(TokenDaoImpl.class);

    @Autowired
    private SessionFactory sessionFactory;


    @Override
    public String getToken(Token token) {
        Token current = (Token) sessionFactory.getCurrentSession()
                .createCriteria(Token.class)
                .add(Restrictions.eq("token", token))
                .uniqueResult();
        logger.info("Token get from db");
        return current.getToken();
    }

    @Override
    public void saveToken(Token token) {
        sessionFactory.getCurrentSession()
                .save(token);
        logger.info("Token save to db");
    }
}
