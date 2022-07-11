package com.example.houserenting.repository;

import com.example.houserenting.model.House;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

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

    @Query(value = "select house.id, name, address, bedroom, bathroom, description, price, owner_id, category_id, status  from house\n" +
            "join\n" +
            "(select house_id, count(house_id) as dem\n" +
            "from orderr\n" +
            "group by house_id\n" +
            "order by dem desc\n" +
            "limit 2) as abc on abc.house_id = house.id",nativeQuery = true)
    Iterable<House> findTop2();


    @Query (value = "select * from house where (bathroom = :bathroom and bedroom = :bedroom)",nativeQuery = true )
    Page<House> findAllByBathroomAndBedroom (@Param("bathroom") int bathroom,@Param("bedroom") int bedroom,Pageable pageable);



    @Query(value = "select * from house where owner_id = :owner_id and status >= 1",nativeQuery = true)
    Iterable<House> findByOwnerId(@Param("owner_id") Long owner_id);

    @Query(value = "select * from house order by id desc limit 1", nativeQuery = true)
    House findLastHouse();
}
