package com.fortegroup.dao.accounts;

import com.fortegroup.model.accounts.User;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * Implementation for {@link UserDao} interface for {@link User}
 * @author Alexey Burov
 * @version 1.0
 */
public class UserDaoImpl implements UserDao{

    private static final Logger logger = LoggerFactory.getLogger(UserDaoImpl.class);

    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public User loadUserByUsername(String username) {

        User user = (User) sessionFactory.getCurrentSession()
                .createCriteria(User.class)
                .add(Restrictions.eq("username", username))
                .uniqueResult();
        logger.info("User has been loaded successfully. User info: " + user);
        return user;
    }


    @Override
    public long saveUser(User user) {
        user.setAuthorities("ROLE_USER");
        long id = (long) sessionFactory.getCurrentSession().save(user);
        logger.info("User has been saved successfully. User info: " + user);
        return id;

    }

    @Override
    public User get(long id) {
        User user = sessionFactory.getCurrentSession().get(User.class, id);
        logger.info("User has been loaded successfully. User info: " + user);
        return user;

    }

}
