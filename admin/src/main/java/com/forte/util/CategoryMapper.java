package com.forte.util;


import com.forte.dto.CategoryDTO;
import com.forte.model.Category;

/**
 *
 * @author Artyom Kazakov
 * @version 1.0
 */
public final class CategoryMapper {
    private CategoryMapper(){}

    public static CategoryDTO toDtoCategory(Category category){
        CategoryDTO categoryDTO = new CategoryDTO();
        categoryDTO.setId(category.getId());
        categoryDTO.setName(category.getName());
        categoryDTO.setDisplayName(category.getDisplayName());
        categoryDTO.setAvailability(category.isAvailability());
        categoryDTO.setLongDescription(category.getLongDescription());
        categoryDTO.setShortDescription(category.getShortDescription());
        return categoryDTO;
    }

    public static Category toCategory(CategoryDTO categoryDTO){
        Category category = new Category();
        category.setId(categoryDTO.getId());
        category.setName(categoryDTO.getName());
        category.setDisplayName(categoryDTO.getDisplayName());
        category.setAvailability(categoryDTO.isAvailability());
        category.setLongDescription(categoryDTO.getLongDescription());
        category.setShortDescription(categoryDTO.getShortDescription());
        return category;
    }
}
