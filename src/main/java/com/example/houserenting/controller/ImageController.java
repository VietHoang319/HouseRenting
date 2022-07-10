package com.example.houserenting.controller;

import com.example.houserenting.model.Image;
import com.example.houserenting.service.impl.ImageServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.io.File;
import java.util.HashMap;
import java.util.Map;

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
}
