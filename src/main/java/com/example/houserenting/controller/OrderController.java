package com.example.houserenting.controller;

import com.example.houserenting.model.House;
import com.example.houserenting.model.Order;
import com.example.houserenting.service.HouseService;
import com.example.houserenting.service.impl.HouseServiceImpl;
import com.example.houserenting.service.impl.OrderServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/orders")
public class OrderController {
    @Autowired
    OrderServiceImpl orderService;
    @Autowired
    HouseServiceImpl houseService;

    @GetMapping
    public ResponseEntity<Iterable<Order>> findAllOrder() {
        return new ResponseEntity<>(orderService.findAll(),HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Order> save(@RequestBody Order order) {
        orderService.save(order);
        House house = houseService.findById(order.getHouse().getId()).get();
        house.setStatus(2);
        houseService.save(house);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
