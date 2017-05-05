package com.fortegroup.dao.configurabletext;

import com.fortegroup.model.configurabletext.TextParam;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Created by alex on 5/4/17.
 */
public class TextDaoImpl implements TextDao{

    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public List<TextParam> getHeaderParams() {
        Session session = sessionFactory.getCurrentSession();
        Query query = session.createQuery("from TextParam p where p.key like :key");
        query.setParameter("key","%header%");
        List<TextParam> result = (List<TextParam>) query.list();

        return result;
    }

    @Override
    public List<TextParam> getFooterParams() {
        Session session = sessionFactory.getCurrentSession();
        Query query = session.createQuery("from TextParam p where p.key like :key");
        query.setParameter("key","%footer%");
        List<TextParam> result = (List<TextParam>) query.list();

        return result;
    }
}
