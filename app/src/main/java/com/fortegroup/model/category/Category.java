package com.fortegroup.model.category;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;
/**
 *
 * @author Artyom Kazakov
 * @version 1.0
 */
@Entity
@Table(name = "category", schema = "electro", catalog = "postgres")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name", nullable = false)
    private String name;
    @Column(name = "display_name", nullable = false)
    private String displayName;
    @Column(name = "availability", nullable = false)
    private boolean availability;
    @Column(name = "short_description")
    private String shortDescription;
    @Column(name = "long_description")
    private String longDescription;

    @JoinColumn(name = "root_category")
    @ManyToOne(optional = true, fetch = FetchType.EAGER)
    private Category rootCategory;

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinTable(name = "category_subcategory", schema = "electro", catalog = "postgres", joinColumns = {
            @JoinColumn(name = "category_id", nullable = false, updatable = false) },
            inverseJoinColumns = { @JoinColumn(name = "parent_category_id",
                    nullable = false, updatable = false) })
    private Set<Category> parentCategories = new HashSet<>(0);

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinTable(name = "category_subcategory", schema = "electro", catalog = "postgres", joinColumns = {
            @JoinColumn(name = "parent_category_id", nullable = false, updatable = false) },
            inverseJoinColumns = { @JoinColumn(name = "category_id",
                    nullable = false, updatable = false) })
    private Set<Category> childCategories = new HashSet<>(0);


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDisplayName() {
        return displayName;
    }

    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }

    public boolean isAvailability() {
        return availability;
    }

    public void setAvailability(boolean availability) {
        this.availability = availability;
    }

    public String getShortDescription() {
        return shortDescription;
    }

    public void setShortDescription(String shortDescription) {
        this.shortDescription = shortDescription;
    }

    public String getLongDescription() {
        return longDescription;
    }

    public void setLongDescription(String longDescription) {
        this.longDescription = longDescription;
    }

    public Category getRootCategory() {
        return rootCategory;
    }

    public void setRootCategory(Category rootCategory) {
        this.rootCategory = rootCategory;
    }

    public Set<Category> getParentCategories() {
        return parentCategories;
    }

    public void setParentCategories(Set<Category> parentCategories) {
        this.parentCategories = parentCategories;
    }

    public Set<Category> getChildCategories() {
        return childCategories;
    }

    public void setChildCategories(Set<Category> childCategories) {
        this.childCategories = childCategories;
    }
}
