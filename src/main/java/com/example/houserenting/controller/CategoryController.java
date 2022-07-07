package com.example.houserenting.controller;





import com.example.houserenting.model.Category;
import com.example.houserenting.model.House;
import com.example.houserenting.service.CategoryService;
import com.example.houserenting.service.impl.CategoryServiceImpl;
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
public class CategoryController {
    @Autowired
    CategoryService categoryService;

//    @GetMapping
//    public ResponseEntity<Iterable<Category>> findAllHouse() {
//        List<Category> categories = (List<Category>) categoryService.findAll();
//        return new ResponseEntity<>(categories, HttpStatus.OK);
//    }

    @GetMapping
    public ResponseEntity<Iterable<Category>> findAllCate() {
    return new ResponseEntity<>(categoryService.findAllCategory(),HttpStatus.OK);
    }

//    @GetMapping
//    public ResponseEntity<Page<House>> findAllHouse(@PageableDefault(value = 2) Pageable pageable) {
//        Page<House> houses = houseService.findAll(pageable);
//        return new ResponseEntity<>(houses, HttpStatus.OK);
//    }

    @GetMapping("/{id}")
    public ResponseEntity<Category> findHouseId(@PathVariable Long id) {
        Optional<Category> categoryOptional = categoryService.findById(id);
        if (!categoryOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(categoryOptional.get(), HttpStatus.OK);
    }

}

