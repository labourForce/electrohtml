package com.forte.service;


import com.forte.dto.CategoryDTO;

import java.util.List;

public interface CategoryService {

    void addCategory(CategoryDTO categoryDTO);

    void deleteCategory(Long id);

    void updateCategory(CategoryDTO categoryDTO);

    CategoryDTO getCategory(Long id);

    List<CategoryDTO> getRootCategories();

    List<CategoryDTO> getChildCategories(Long id);
}
