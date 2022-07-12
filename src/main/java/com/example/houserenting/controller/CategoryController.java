package com.example.houserenting.controller;

import com.example.houserenting.model.Category;
import com.example.houserenting.model.House;
import com.example.houserenting.service.CategoryService;
import com.example.houserenting.service.impl.CategoryServiceImpl;
import com.example.houserenting.service.impl.HouseServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/categories")
public class  CategoryController {
    @Autowired
    CategoryService categoryService;
    @Autowired
    HouseServiceImpl houseService;

    @GetMapping
    public ResponseEntity<Iterable<Category>> findAllCate() {
    return new ResponseEntity<>(categoryService.findAllCategory(),HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Page<House>> findCategoryId(@PathVariable Long id, @PageableDefault(value = 9) Pageable pageable) {
        Page <House> houses = houseService.findAllByCategory_Id(id, pageable);
        return new ResponseEntity<>(houses, HttpStatus.OK);
    }
}

