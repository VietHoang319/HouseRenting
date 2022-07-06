package com.example.houserenting.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface IService <T>{
    Page<T> findAll(Pageable pageable);
    Optional<T> findById(Long id);
    Iterable<T> findAll();
    void save(T t);
    void remove(Long id);
}