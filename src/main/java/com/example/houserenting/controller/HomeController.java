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

import java.util.Optional;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

@RestController
@CrossOrigin("*")
@RequestMapping("/home")
public class HomeController {
    @Autowired
    HouseServiceImpl houseService;

    @GetMapping
    public ResponseEntity<Page<House>> findAllHouse(@PageableDefault(value = 9) Pageable pageable) {
        Page<House> houses = houseService.findAll(pageable);
        return new ResponseEntity<>(houses, HttpStatus.OK);
    }

    @GetMapping("/find-by-bedroom")
    public ResponseEntity<Page<House>> findHouseByBedroom(@RequestParam(value = "bedroom") int bedroom, @PageableDefault(value = 9) Pageable pageable) {
        Page<House> houses = houseService.findAllByBedroom(bedroom, pageable);
        return new ResponseEntity<>(houses, HttpStatus.OK);
    }

    @GetMapping("/find-by-category")
    public ResponseEntity<Page<House>> findHouseByCategory(@RequestParam(value = "category_id") int category, @PageableDefault(value = 9) Pageable pageable) {
        Page<House> houses = houseService.findByCategory(category, pageable);
        return new ResponseEntity<>(houses, HttpStatus.OK);
    }

    @GetMapping("/find-by-bathroom")
    public ResponseEntity<Page<House>> findHouseByBathroom(@RequestParam(value = "bathroom") int bathroom, @PageableDefault(value = 9) Pageable pageable) {
        Page<House> houses = houseService.findAllByBathroom(bathroom, pageable);
        return new ResponseEntity<>(houses, HttpStatus.OK);
    }

    @GetMapping("/house/{id}")
    public ResponseEntity<House> findById(@PathVariable Long id) {
        Optional<House> houseOptional = houseService.findById(id);
        if (!houseOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(houseOptional.get(), HttpStatus.OK);
    }

    @GetMapping("/search-by-all")
    public ResponseEntity<Iterable<House>> findByAll(@RequestParam(value = "address") String address, @RequestParam(value = "start") int start, @RequestParam(value = "end") int end,
                                                     @RequestParam(value = "bathroom") int bathroom, @RequestParam("bedroom") int bedroom,
                                                     @RequestParam("cus_begin") String cus_begin, @RequestParam("cus_end") String cus_end) {
        if ((cus_begin.equals("") && cus_end.equals(""))) {
            cus_begin = "1900-01-01";
            cus_end = String.valueOf(LocalDate.now());
        }
        Iterable<House> houses = houseService.findByAll("%" + address + "%", start, end, bathroom, bedroom, LocalDate.parse(cus_begin), LocalDate.parse(cus_end));
        return new ResponseEntity<>(houses, HttpStatus.OK);
    }
}
