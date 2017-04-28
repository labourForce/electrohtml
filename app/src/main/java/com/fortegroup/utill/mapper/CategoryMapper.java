package com.fortegroup.utill.mapper;

import com.fortegroup.model.category.Category;
import com.fortegroup.model.dto.CategoryDTO;

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
}
