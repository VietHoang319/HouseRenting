package com.example.houserenting.service;

import com.example.houserenting.model.Image;

public interface ImageService extends IService<Image>{
    Iterable<Image> findAllImg();
}
