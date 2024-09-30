package com.rentalcar.backend.common;

import com.rentalcar.backend.model.Cars;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CarsRepo extends JpaRepository<Cars, Integer> {
    List<Cars> findByName(String name);
}
