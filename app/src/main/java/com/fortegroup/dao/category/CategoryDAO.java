package com.fortegroup.dao.category;

import com.fortegroup.model.category.Category;

import java.util.List;

/**
 *
 * @author Artyom Kazakov
 * @version 1.0
 */
public interface CategoryDAO {

    Long addCategory(Category category);

    Category get(Long id);

    Category getByName(String name);

    Category getByNameAndParentCategoryId(String name, Long parentCategoryId);

    List<Category> getRootCategories();

    List<Category> getChildCategories(Long id);
}
