package com.example.houserenting.model;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import java.util.Locale;

@Entity
public class House {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Long id;
    @NotBlank(message = "Không được để trống tên")
    private String name;
    @ManyToOne
    private Category category;
    @NotBlank(message = "Không được để trống địa chỉ")
    private String address;
    @Max(value = 10, message = "Nhập nhiều nhất 10 phòng ngủ")
    @Min(value = 1, message = "Nhập ít nhất 1 phòng ngủ")
    private int bedroom;
    @Max(value = 3, message = "Nhập nhiều nhất 3 phòng tăm")
    @Min(value = 1, message = "Nhập ít nhất 1 phòng tắm")
    private int bathroom;
    private String description;
    @Min(value = 1, message = "Giá thấp nhất là 1")
    private int price;
    @ManyToOne
    private User owner;
    private int status;

    public House() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public int getBedroom() {
        return bedroom;
    }

    public void setBedroom(int bedroom) {
        this.bedroom = bedroom;
    }

    public int getBathroom() {
        return bathroom;
    }

    public void setBathroom(int bathroom) {
        this.bathroom = bathroom;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public User getOwner() {
        return owner;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }
}
