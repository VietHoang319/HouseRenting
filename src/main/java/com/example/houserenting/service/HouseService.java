package com.example.houserenting.service;

import com.example.houserenting.model.House;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface HouseService extends IService<House>{
//    Iterable<House> findAllByCategory_Id(Long id);
    Page<House> findAllByCategory_Id(Long id, Pageable pageable);
    Iterable<House> findByOwnerId (Long owner_id);
    House findLastHouse();
}
