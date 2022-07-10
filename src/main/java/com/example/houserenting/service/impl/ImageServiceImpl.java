package com.example.houserenting.service.impl;

import com.example.houserenting.model.Image;
import com.example.houserenting.repository.ImageRepository;
import com.example.houserenting.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ImageServiceImpl implements ImageService {
    @Autowired
    ImageRepository imageRepository;


    @Override
    public Page<Image> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public Optional<Image> findById(Long id) {
        return null;
    }

    @Override
    public Iterable<Image> findAll() {
        return null;
    }

    @Override
    public void save(Image image) {
        imageRepository.save(image);
    }

    @Override
    public void remove(Long id) {
        imageRepository.deleteById(id);
    }

    @Override
    public Iterable<Image> findAllImg() {
        return imageRepository.findAll();
    }

    @Override
    public Iterable<Image> findByHouse(Long id) {
        return imageRepository.findImageByHouseId(id);
    }

    @Override
    public Optional<Image> findCardByHouse(Long id) {
        return imageRepository.findCardByHouseId(id);
    }
}
