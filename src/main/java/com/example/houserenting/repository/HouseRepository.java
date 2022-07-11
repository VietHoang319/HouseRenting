package com.example.houserenting.repository;

import com.example.houserenting.model.House;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.Date;

@Repository
public interface HouseRepository extends JpaRepository<House,Long> {
    @Query(value = "select * from house where status = 1",nativeQuery = true)
    Page<House> findAll(Pageable pageable);
//    Iterable<House> findAllByCategory_Id(Long id);

    Page<House> findAllByCategory_Id(Long id, Pageable pageable);
    @Query(value = "select * from house where bedroom = :bedroom and status=1",nativeQuery = true)
    Page<House> findByBedRoom (@Param("bedroom") int bedroom, Pageable pageable);

    @Query(value = "select * from house where bathroom = :bathroom and status=1",nativeQuery = true)
    Page<House> findByBathroom (@Param("bathroom") int bathroom, Pageable pageable);


    @Query (value = "select * from house where (bathroom = :bathroom and bedroom = :bedroom)",nativeQuery = true )
    Page<House> findAllByBathroomAndBedroom (@Param("bathroom") int bathroom,@Param("bedroom") int bedroom,Pageable pageable);




    @Query(value = "select * from house where owner_id = :owner_id",nativeQuery = true)
    Iterable<House> findByOwnerId (@Param("owner_id") int owner_id);


    @Query(value =
           " select * from house where"+
           " (address =:address and (price between :start and :end))"+"and (bathroom=:bathroom and bedroom=:bedroom)"+ "and status = 1"+ " UNION"+
           " select h.id , address ,bathroom,bedroom,description,name,price ,status,category_id,owner_id"+ " from house h join orderr o on h.id = o.house_id"+
    "where not(:cus_begin<=o.start_time and o.start_time<=:cus_end or :cus_begin<=o.end_time and o.end_time<=:cus_end)",nativeQuery = true)
    Iterable<House>findByAllThing(@Param("address")String address, @Param("start") int start, @Param("end")int end, @Param("bathroom") int bathroom, @Param("bedroom") int bedroom, @Param("cus_begin") LocalDate cus_begin,@Param("cus_end") LocalDate cus_end);
}