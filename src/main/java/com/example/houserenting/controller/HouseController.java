package com.example.houserenting.controller;

import com.example.houserenting.model.House;
import com.example.houserenting.service.impl.HouseServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/houses")
public class HouseController {
    @Autowired
    HouseServiceImpl houseService;
    @GetMapping("/{id}")
    public ResponseEntity<House> findById(@PathVariable Long id) {
        Optional<House> houseOptional = houseService.findById(id);
        if (!houseOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(houseOptional.get(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<House> saveHouse(@Valid @RequestBody House house) {
        house.setStatus(1);
        houseService.save(house);
        return new ResponseEntity<>(house, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<House> updateProduct(@PathVariable Long id, @RequestBody House house) {
        Optional<House> houseOptional = houseService.findById(id);
        if (!houseOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        house.setId(houseOptional.get().getId());
        houseService.save(house);
        return new ResponseEntity<>(house, HttpStatus.OK);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<House> deleteHouse(@PathVariable Long id) {
        Optional<House> houseOptional = houseService.findById(id);
        if (!houseOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        houseOptional.get().setStatus(0);
        houseService.save(houseOptional.get());
        return new ResponseEntity<>(houseOptional.get(), HttpStatus.NO_CONTENT);
    }

//    @GetMapping("/category/{id}")
//    public ResponseEntity<Iterable<House>> findCategoryId(@PathVariable Long id) {
//        Iterable <House> productOptional = houseService.findAllByCategory_Id(id);
//        return new ResponseEntity<>(productOptional, HttpStatus.OK);
//    }



//    @GetMapping
//    public ResponseEntity<Page<House>> findAllHouse(@PageableDefault(value = 2) Pageable pageable) {
//        Page<House> houses = houseService.findAll(pageable);
//        return new ResponseEntity<>(houses, HttpStatus.OK);
//    }
}
