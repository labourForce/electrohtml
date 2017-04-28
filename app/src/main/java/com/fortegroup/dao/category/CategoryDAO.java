package com.fortegroup.dao.category;

import com.fortegroup.model.category.Category;
/**
 *
 * @author Artyom Kazakov
 * @version 1.0
 */
public interface CategoryDAO {

    Long addCategory(Category category);

    Category get(Long id);

    Category getByDisplayName(String displayName);

    Category getByDisplayNameAndParentCategoryId(String displayName, Long parentCategoryId);
}
