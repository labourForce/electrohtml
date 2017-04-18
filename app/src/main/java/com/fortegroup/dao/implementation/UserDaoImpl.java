package com.fortegroup.dao.implementation;

import com.fortegroup.dao.UserDao;
import com.fortegroup.model.User;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * Implementation for {@link com.fortegroup.dao.UserDao} interface for {@link com.fortegroup.model.User}
 * @author Alexey Burov
 * @version 1.0
 */
public class UserDaoImpl implements UserDao{


    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public User loadUserByUsername(String username) {
        return (User) sessionFactory.getCurrentSession()
                .createCriteria(User.class)
                .add(Restrictions.eq("username", username))
                .uniqueResult();
    }

    @Override
    public long saveUser(User user) {
        user.setAuthorities("ROLE_USER");
        return (long) sessionFactory.getCurrentSession().save(user);

    }

    @Override
    public User get(long id) {
        return sessionFactory.getCurrentSession().get(User.class, id);
    }
}
