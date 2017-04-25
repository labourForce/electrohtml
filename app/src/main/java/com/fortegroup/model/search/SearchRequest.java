package com.fortegroup.model.search;

/**
 * @author Alexey Burov
 */
public class SearchRequest {
    private String id;
    private String keyword;
    private String category;

    public SearchRequest(String id, String keyword, String category) {
        this.id = id;
        this.keyword = keyword;
        this.category = category;
    }

    public SearchRequest() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getKeyword() {
        return keyword;
    }

    public void setKeyword(String keyword) {
        this.keyword = keyword;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}
