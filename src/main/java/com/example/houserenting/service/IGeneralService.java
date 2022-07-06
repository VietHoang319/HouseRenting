package com.example.houserenting.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface IGeneralService<T> {
    Page<T> findAll(Pageable pageable);
    Iterable<T> findAll();
    void save(T t);
    Optional<T> findById(Long id);
}
