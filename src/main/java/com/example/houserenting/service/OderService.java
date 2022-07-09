package com.example.houserenting.service;

import com.example.houserenting.model.Category;
import com.example.houserenting.model.Order;

public interface OderService extends IService<Order>{
    Iterable<Order> findAllOrder();
}
