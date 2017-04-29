package com.fortegroup.dao.category;


import com.fortegroup.model.category.Category;
import org.hibernate.Query;
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
public class CategoryDAOImpl implements CategoryDAO {

    private static final Logger logger = LoggerFactory.getLogger(CategoryDAOImpl.class);

    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public Long addCategory(Category category) {
        Long id = (Long) sessionFactory.getCurrentSession().save(category);
        logger.info("Category has been added successfully. Category info: " + category);
        return id;
    }

    @Override
    public Category get(Long id) {
        Category category = sessionFactory.getCurrentSession().get(Category.class, id);
        logger.info("Category has been loaded successfully. Category info: " + category);
        return category;
    }

    @Override
    public Category getByDisplayName(String displayName) {
        Category category = (Category) sessionFactory.getCurrentSession()
                .createCriteria(Category.class)
                .add(Restrictions.eq("displayName", displayName))
                .uniqueResult();
        logger.info("Category has been loaded successfully. Category info: " + category);
        return category;
    }

    @Override
    public Category getByDisplayNameAndParentCategoryId(String displayName, Long parentCategoryId) {
        Query query= sessionFactory.getCurrentSession().
                createQuery("select c from Category c join c.childCategories cc " +
                        "where cc.id=:parentCategoryId and c.displayName=:displayName");
        query.setParameter("displayName", displayName);
        query.setParameter("parentCategoryId", parentCategoryId);
        Category category = (Category) query.uniqueResult();
        return category;
    }
}
