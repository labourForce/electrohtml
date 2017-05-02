package com.fortegroup.model.search;

import java.util.List;

/**
 * @author Eugene Pankov
 * @version 1.0
 */
public class SearchResult {
    private int pageCount;
    private List<Products> products;

    public SearchResult(int pageCount, List<Products> products) {
        this.pageCount = pageCount;
        this.products = products;
    }

    public List<Products> getProducts() {
        return products;
    }

    public void setProducts(List<Products> products) {
        this.products = products;
    }

    public int getPageCount() {
        return pageCount;
    }

    public void setPageCount(int pageCount) {
        this.pageCount = pageCount;
    }
}
