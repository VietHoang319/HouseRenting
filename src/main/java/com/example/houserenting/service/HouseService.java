package com.example.houserenting.service;

import com.example.houserenting.model.House;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.time.LocalDate;
import java.util.Date;

public interface HouseService extends IService<House>{
//    Iterable<House> findAllByCategory_Id(Long id);
    Page<House> findAllByCategory_Id(Long id, Pageable pageable);

    Page<House> findAllByBedroom(int bedroom,Pageable pageable);

    Page<House>findAllByBathroom (int bathroom,Pageable pageable);

    Page<House>findAllByBathroomAndBedroom(int bathroom,int bedroom,Pageable pageable);

//    Page<House>findAllByStatus(int status,Pageable pageable);
    Iterable<House> findByOwnerId (int owner_id);

    Iterable<House>findByAll(String address, int start, int end, int bathroom, int bedroom, LocalDate cus_begin, LocalDate cus_end);
}
