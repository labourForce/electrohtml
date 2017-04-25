package com.fortegroup.elasticsearch.model;

/**
 * @author Alexey Burov
 */
public class SearchRequest {
    private String searchKey;
    private String category;

    public SearchRequest(String searchKey, String category) {
        this.searchKey = searchKey;
        this.category = category;
    }

    public SearchRequest() {
    }

    public String getSearchKey() {
        return searchKey;
    }

    public void setSearchKey(String searchKey) {
        this.searchKey = searchKey;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}
