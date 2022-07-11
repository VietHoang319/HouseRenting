package com.example.houserenting.repository;

import com.example.houserenting.model.House;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

import java.time.LocalDate;
import java.util.Date;

@Repository
public interface HouseRepository extends JpaRepository<House,Long> {
    @Query(value = "select * from house where status = 1",nativeQuery = true)
    Page<House> findAll(Pageable pageable);
//    Iterable<House> findAllByCategory_Id(Long id);

    Page<House> findAllByCategory_Id(Long id, Pageable pageable);

    @Query(value = "select * from house where category_id = :category_id and status=1",nativeQuery = true)
    Page<House> findByCategory (@Param("category_id") int category, Pageable pageable);

    @Query(value = "select * from house where bedroom = :bedroom and status=1",nativeQuery = true)
    Page<House> findByBedRoom (@Param("bedroom") int bedroom, Pageable pageable);

    @Query(value = "select * from house where bathroom = :bathroom and status=1",nativeQuery = true)
    Page<House> findByBathroom (@Param("bathroom") int bathroom, Pageable pageable);


    @Query (value = "select * from house where (bathroom = :bathroom and bedroom = :bedroom)",nativeQuery = true )
    Page<House> findAllByBathroomAndBedroom (@Param("bathroom") int bathroom,@Param("bedroom") int bedroom,Pageable pageable);

    @Query(value = "select * from house where owner_id = :owner_id and status >= 1",nativeQuery = true)
    Iterable<House> findByOwnerId(@Param("owner_id") Long owner_id);

    @Query(value = "select * from house order by id desc limit 1", nativeQuery = true)
    House findLastHouse();

    @Query(value =
           "select * from house where\n" +
                   "address like :address and (price between :start and :end) and bathroom=:bathroom and bedroom=:bedroom and status = 1\n" +
                   "UNION\n" +
                   "select h.id , address ,bathroom,bedroom,description,name,price ,h.status,category_id,owner_id\n" +
                   "from house h join orderr o on h.id = o.house_id\n" +
                   "where\n" +
                   "        address like :address and (price between :start and :end) and bathroom=:bathroom and bedroom=:bedroom and h.status = 1\n" +
                   "and h.id not in (select h.id from house h join orderr o on h.id = o.house_id where :cusBegin<=o.start_time and o.start_time<=:cus_end or :cusBegin<=o.end_time and o.end_time<=:cus_end)\n",nativeQuery = true)
    Iterable<House>findByAllThing(@Param("address")String address, @Param("start") int start, @Param("end")int end, @Param("bathroom") int bathroom, @Param("bedroom") int bedroom, @Param("cusBegin") LocalDate cusBegin,@Param("cus_end") LocalDate cus_end);
}