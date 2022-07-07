package com.example.houserenting.service;

import com.example.houserenting.model.House;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface HouseService extends IService<House>{
    Iterable<House> findAllByCategory_Id(Long id);
}
