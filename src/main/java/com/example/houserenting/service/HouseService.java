package com.example.houserenting.service;

import com.example.houserenting.model.House;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface HouseService extends IService<House>{
//    Iterable<House> findAllByCategory_Id(Long id);
    Page<House> findAllByCategory_Id(Long id, Pageable pageable);
    Iterable<House> findByOwnerId (Long owner_id);
    House findLastHouse();

    Page<House> findAllByBedroom(int bedroom,Pageable pageable);

    Page<House>findAllByBathroom (int bathroom,Pageable pageable);

    Page<House>findAllByBathroomAndBedroom(int bathroom,int bedroom,Pageable pageable);

//    Page<House>findAllByStatus(int status,Pageable pageable);

}
