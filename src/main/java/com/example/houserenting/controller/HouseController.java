package com.example.houserenting.controller;

import com.example.houserenting.model.Category;
import com.example.houserenting.model.House;
import com.example.houserenting.service.impl.HouseServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/houses")
public class HouseController {
    @Autowired
    HouseServiceImpl houseService;

    @PostMapping
    public ResponseEntity<House> saveHouse(@Valid @RequestBody House house) {
        houseService.save(house);
        return new ResponseEntity<>(houseService.findLastHouse(), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<House> updateHouse(@PathVariable Long id, @RequestBody House house) {
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

    @GetMapping("/find-by-ownerId")  // Tìm theo id User đăng nhập để ra số house đã đăng của id đó!
    public ResponseEntity<Iterable<House>> findHouseByOwnerId(@RequestParam(value = "owner_id") Long owner_id) {
        List<House> houses = (List<House>) houseService.findByOwnerId(owner_id);
        if (houses.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(houses, HttpStatus.OK);
    }

    @GetMapping("/by-price-top2")   // Sắp xếp giá từ thấp đến cao
    public ResponseEntity<Iterable<House>> findTop2() {
        List<House> houses = (List<House>) houseService.findTop2();
        if (houses.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(houses, HttpStatus.OK);
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> handleValidationExceptions(
            MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        return errors;
    }
}
