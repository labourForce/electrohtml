package com.forte.repository;

import com.forte.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface CategoryRepository extends JpaRepository<Category, Long> {
    @Query("select c from Category c where c.rootCategory=null order by c.id")
    List<Category> findRootCategories();

    @Query("select cc from Category c join c.childCategories cc where c.id=:id order by cc.id")
    List<Category> findChildCategories(@Param("id") Long id);
}
