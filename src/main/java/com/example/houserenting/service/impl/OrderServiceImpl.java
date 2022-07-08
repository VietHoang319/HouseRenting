package com.example.houserenting.service.impl;

import com.example.houserenting.model.Order;
import com.example.houserenting.repository.OrderRepository;
import com.example.houserenting.service.OderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class OrderServiceImpl implements OderService {
    @Autowired
    OrderRepository orderRepository;

    @Override
    public Page<Order> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public Optional<Order> findById(Long id) {
        return orderRepository.findById(id);
    }

    @Override
    public Iterable<Order> findAll() {
        return orderRepository.findAll();
    }

    @Override
    public void save(Order order) {
        orderRepository.save(order);
    }

    @Override
    public void remove(Long id) {
        orderRepository.deleteById(id);
    }

    @Override
    public Iterable<Order> findAllOrder() {
        return orderRepository.findAll();
    }
}
