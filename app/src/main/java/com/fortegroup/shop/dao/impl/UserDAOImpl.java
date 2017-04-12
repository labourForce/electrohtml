package com.fortegroup.shop.dao.impl;

import com.fortegroup.shop.bean.User;
import com.fortegroup.shop.dao.UserDAO;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserDAOImpl implements UserDAO {

    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public User save(User user) {
        Session session = sessionFactory.getCurrentSession();
        Long id = (Long) session.save(user);
        user.setId(id);
        return user;
    }

    @Override
    public User findByEmail(User user) {
        Session session = sessionFactory.getCurrentSession();
        Query query = session.createQuery("from User u where u.email =:email");
        query.setParameter("email", user.getEmail());

        List queryList = query.list();
        if (queryList != null && queryList.isEmpty()) {
            return null;
        } else {
            return (User) queryList.get(0);
        }
    }
}
