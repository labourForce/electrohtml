package com.fortegroup.model.search;

import java.util.List;

/**
 * Created by ux501 on 27.04.2017.
 */
public class SearchResult {
    int pageCount;
    List<Products> products;

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
