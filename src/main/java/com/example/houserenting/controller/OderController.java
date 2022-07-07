package com.example.houserenting.controller;

import com.example.houserenting.model.Category;
import com.example.houserenting.model.Order;
import com.example.houserenting.service.impl.OrderServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
@RequestMapping("/orders")
public class OderController {
    @Autowired
    OrderServiceImpl orderService;

    @GetMapping
    public ResponseEntity<Iterable<Order>> findAllOrder() {
        return new ResponseEntity<>(orderService.findAll(),HttpStatus.OK);
    }
    
}
