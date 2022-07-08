package com.example.houserenting.service.impl;

import com.example.houserenting.model.House;
import com.example.houserenting.repository.HouseRepository;
import com.example.houserenting.service.HouseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class HouseServiceImpl implements HouseService {
    @Autowired
    HouseRepository houseRepository;

    @Override
    public Page<House> findAll(Pageable pageable) {
        return houseRepository.findAll(pageable);
    }

    @Override
    public Optional<House> findById(Long id) {
        return houseRepository.findById(id);
    }

    @Override
    public Iterable<House> findAll() {
        return null;
    }

    @Override
    public void save(House house) {
        houseRepository.save(house);
    }

    @Override
    public void remove(Long id) {
        houseRepository.deleteById(id);
    }

    @Override
    public Page<House> findAllByCategory_Id(Long id, Pageable pageable) {
        return houseRepository.findAllByCategory_Id(id, pageable);
    }

    @Override
    public Page<House> findAllByBedroom(int bedroom, Pageable pageable) {
        return houseRepository.findByBedRoom(bedroom,pageable);
    }

    @Override
    public Page<House> findAllByBathroom(int bathroom, Pageable pageable) {
        return houseRepository.findByBathroom(bathroom,pageable);
    }

    @Override
    public Page<House> findAllByBathroomAndBedroom(int bathroom, int bedroom, Pageable pageable) {
        return houseRepository.findAllByBathroomAndBedroom(bathroom,bedroom,pageable);
    }

//    @Override
//    public Page<House> findAllByStatus(int status ,Pageable pageable) {
//        return houseRepository.findByStatus(status,pageable);
//    }


//    Cái này tìm không phân trang
//    @Override
//    public Iterable<House> findAllByCategory_Id(Long id) {
//        return houseRepository.findAllByCategory_Id(id);
//    }
}
