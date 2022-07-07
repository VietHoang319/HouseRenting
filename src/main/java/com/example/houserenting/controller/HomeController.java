package com.example.houserenting.controller;

import com.example.houserenting.model.House;
import com.example.houserenting.service.impl.HouseServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
@RequestMapping("/home")
public class HomeController {
    @Autowired
    HouseServiceImpl houseService;

    @GetMapping
    public ResponseEntity<Page<House>> findAllHouse(@PageableDefault(value = 2) Pageable pageable) {
        Page<House> houses = houseService.findAll(pageable);
        return new ResponseEntity<>(houses, HttpStatus.OK);
    }
}
