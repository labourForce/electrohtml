package com.fortegroup.dao.category;


import com.fortegroup.model.category.Category;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

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
    public Category getByName(String name) {
        Category category = (Category) sessionFactory.getCurrentSession()
                .createCriteria(Category.class)
                .add(Restrictions.eq("name", name))
                .uniqueResult();
        logger.info("Category has been loaded successfully. Category info: " + category);
        return category;
    }

    @Override
    public Category getByNameAndParentCategoryId(String name, Long parentCategoryId) {
        Query query= sessionFactory.getCurrentSession().
                createQuery("select c from Category c join c.parentCategories cc " +
                        "where cc.id=:parentCategoryId and c.name=:name");
        query.setParameter("name", name);
        query.setParameter("parentCategoryId", parentCategoryId);
        Category category = (Category) query.uniqueResult();
        return category;
    }

    /**
     * Get all root categories (those that have parent id set to null
     * @return  List with root categories
     */
    @Override
    @SuppressWarnings("unchecked")
    public List<Category> getRootCategories() {
        return sessionFactory.getCurrentSession().
                createQuery("select c from Category c where c.rootCategory=null").list();
    }

    /**
     * Get all child categories for given category id
     * @param id  Id number of given category
     * @return  List with child categories
     */
    @Override
    @SuppressWarnings("unchecked")
    public List<Category> getChildCategories(Long id) {
        return sessionFactory.getCurrentSession().
                createQuery("select cc from Category c join c.childCategories cc " +
                "where c.id=:id").setParameter("id", id).list();
    }

    /**
     * Get all categories ordered by id
     * @return List with all categories
     */
    @Override
    @SuppressWarnings("unchecked")
    public List<Category> getAllCategories() {
        return sessionFactory.getCurrentSession().
                createQuery("select c from Category c order by c.id").list();
    }
}
