package com.example.houserenting.service;

import com.example.houserenting.model.Image;

import java.util.Optional;

public interface ImageService extends IService<Image>{
    Iterable<Image> findAllImg();
    Iterable<Image> findByHouse(Long id);

    Optional<Image> findCardByHouse(Long id);
}
