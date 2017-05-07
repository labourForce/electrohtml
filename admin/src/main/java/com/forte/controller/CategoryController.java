package com.forte.controller;

import com.forte.dto.CategoryDTO;
import com.forte.model.Category;
import com.forte.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @RequestMapping(value = "/rootCategories", method = RequestMethod.GET)
    public String getRootCategories(Model model) {
        List<CategoryDTO> categories = categoryService.getRootCategories();
        model.addAttribute("rootCategories", categories);
        return "category";
    }

    @RequestMapping(value = "/childCategories", method = RequestMethod.GET)
    public String getChildCategories(@RequestParam Long id, Model model) {
        List<CategoryDTO> categories = categoryService.getChildCategories(id);
        CategoryDTO parent = categoryService.getCategory(id);
        model.addAttribute("parent", parent);
        model.addAttribute("childCategories", categories);
        return "category";
    }
}
