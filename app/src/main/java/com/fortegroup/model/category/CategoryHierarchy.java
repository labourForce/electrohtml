package com.fortegroup.model.category;

import com.fortegroup.model.dto.CategoryDTO;

import java.util.ArrayList;
import java.util.List;

/**
 * Class-wrapper for category hierarchy.
 * @author Eugene Pankov
 * @version 1.0
 */
public class CategoryHierarchy {
    private CategoryDTO categoryDTO;
    private StringBuilder path = new StringBuilder();
    private List<CategoryHierarchy> list = new ArrayList<>();

    public CategoryHierarchy(CategoryDTO categoryDTO) {
        this.categoryDTO = categoryDTO;
    }

    public List<CategoryHierarchy> getList() {
        return list;
    }

    public void setList(List<CategoryHierarchy> list) {
        this.list = list;
    }

    public CategoryDTO getCategoryDTO() {
        return categoryDTO;
    }

    public void setCategoryDTO(CategoryDTO categoryDTO) {
        this.categoryDTO = categoryDTO;
    }

    public StringBuilder getPath() {
        return path;
    }

    public void setPath(StringBuilder path) {
        this.path = path;
    }
}
