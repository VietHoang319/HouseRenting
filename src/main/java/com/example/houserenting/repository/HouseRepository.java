package com.example.houserenting.repository;

import com.example.houserenting.model.House;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface HouseRepository extends JpaRepository<House,Long> {
    @Query(value = "select * from house where status = 1",nativeQuery = true)
    Page<House> findAll(Pageable pageable);
//    Iterable<House> findAllByCategory_Id(Long id);

    Page<House> findAllByCategory_Id(Long id, Pageable pageable);

    @Query(value = "select * from house where owner_id = :owner_id",nativeQuery = true)
    Iterable<House> findByOwnerId (@Param("owner_id") int owner_id);
}
