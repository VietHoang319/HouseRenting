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
    public Iterable<House> findByOwnerId(Long owner_id) {
        return houseRepository.findByOwnerId(owner_id);
    }

    @Override
    public House findLastHouse() {
        return houseRepository.findLastHouse();
    }


//    Cái này tìm không phân trang
//    @Override
//    public Iterable<House> findAllByCategory_Id(Long id) {
//        return houseRepository.findAllByCategory_Id(id);
//    }
}
