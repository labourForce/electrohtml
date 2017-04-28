package com.fortegroup.dao.shorturl;


import com.fortegroup.model.shorturl.ShortUrl;
import org.hibernate.Hibernate;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
/**
 *
 * @author Artyom Kazakov
 * @version 1.0
 */
public class ShortUrlDAOImpl implements ShortUrlDAO {

    private static final Logger logger = LoggerFactory.getLogger(ShortUrlDAOImpl.class);

    @Autowired
    private SessionFactory sessionFactory ;

    @Override
    public Long save(ShortUrl shortUrl) {
        Long id = (Long) sessionFactory.getCurrentSession().save(shortUrl);
        logger.info("Short url has been saved successfully. Short url info: " + shortUrl);
        return id;
    }

    @Override
    public ShortUrl get(Long id) {
        ShortUrl shortUrl = sessionFactory.getCurrentSession().get(ShortUrl.class, id);
        logger.info("User has been loaded successfully. User info: " + shortUrl);
        return shortUrl;
    }

    @Override
    public ShortUrl getShortUrl(String shortUrl) {
        ShortUrl shortUrlInstance = (ShortUrl) sessionFactory.getCurrentSession()
                .createCriteria(ShortUrl.class)
                .add(Restrictions.eq("url", shortUrl))
                .uniqueResult();
        Hibernate.initialize(shortUrlInstance.getShortUrlPartObjects());
        logger.info("ShortUrl has been loaded successfully. ShortUrl info: " + shortUrlInstance);
        return shortUrlInstance;
    }

    @Override
    public ShortUrl getShortUrlByFullUrl(String fullUrl) {
        ShortUrl shortUrl = (ShortUrl) sessionFactory.getCurrentSession()
                .createCriteria(ShortUrl.class)
                .add(Restrictions.eq("fullUrl", fullUrl))
                .uniqueResult();
        logger.info("ShortUrl has been loaded successfully. ShortUrl info: " + shortUrl);
        return shortUrl;
    }

    @Override
    public ShortUrl getShortUrlByUrl(String url) {
        ShortUrl shortUrl = (ShortUrl) sessionFactory.getCurrentSession()
                .createCriteria(ShortUrl.class)
                .add(Restrictions.eq("url", url))
                .uniqueResult();
        logger.info("ShortUrl has been loaded successfully. ShortUrl info: " + shortUrl);
        return shortUrl;
    }
}
