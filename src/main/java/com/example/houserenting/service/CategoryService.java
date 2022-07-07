package com.example.houserenting.service;

import com.example.houserenting.model.Category;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface CategoryService extends IService<Category>{
    Iterable<Category> findAllCategory();
}
