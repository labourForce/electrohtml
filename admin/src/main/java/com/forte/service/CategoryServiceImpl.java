package com.forte.service;

import com.forte.dto.CategoryDTO;
import com.forte.repository.CategoryRepository;
import com.forte.util.CategoryMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    @Transactional
    public void addCategory(CategoryDTO categoryDTO) {
        categoryRepository.save(CategoryMapper.toCategory(categoryDTO));
    }

    @Override
    @Transactional
    public void deleteCategory(Long id) {
        categoryRepository.delete(id);
    }

    @Override
    @Transactional
    public void updateCategory(CategoryDTO categoryDTO) {
        categoryRepository.save(CategoryMapper.toCategory(categoryDTO));
    }

    @Override
    @Transactional
    public CategoryDTO getCategory(Long id) {
        return CategoryMapper.toDtoCategory(categoryRepository.getOne(id));
    }

    @Override
    @Transactional
    public List<CategoryDTO> getRootCategories() {
        List<CategoryDTO> rootCategories = new ArrayList<>();

        categoryRepository.findRootCategories().forEach(category ->
                rootCategories.add(CategoryMapper.toDtoCategory(category)));
        return rootCategories;
    }

    @Override
    @Transactional
    public List<CategoryDTO> getChildCategories(Long id) {
        List<CategoryDTO> childCategories = new ArrayList<>();

        categoryRepository.findChildCategories(id).forEach(category ->
                childCategories.add(CategoryMapper.toDtoCategory(category)));
        return childCategories;
    }
}
