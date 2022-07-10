package com.example.houserenting.controller;

import com.example.houserenting.model.Image;
import com.example.houserenting.service.impl.ImageServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/images")
public class ImageController {
    @Autowired
    ImageServiceImpl imageService;

    @GetMapping()
    public ResponseEntity<Iterable<Image>> findAllImg(){
        return new ResponseEntity<>(imageService.findAllImg(),HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Image> save(@RequestBody Image image) {
        imageService.save(image);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Iterable<Image>> findImageByHouseId(@PathVariable Long id) {
        return new ResponseEntity<>(imageService.findByHouse(id),HttpStatus.OK);
    }

    @GetMapping("/house/{id}")
    public ResponseEntity<Optional<Image>> findCardById(@PathVariable Long id) {
        return new ResponseEntity<>(imageService.findCardByHouse(id),HttpStatus.OK);
    }
}
