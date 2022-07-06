package com.example.houserenting.service;


import com.example.houserenting.model.Role;


public interface RoleService {
    Iterable<Role> findAll();


    void save(Role role);

    Role findByName(String name);
}
