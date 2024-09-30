package com.rentalcar.backend.controller;

import com.rentalcar.backend.common.CarsRepo;
import com.rentalcar.backend.model.Cars;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping ("/AscentRentals")
public class CarsController {
    private final CarsRepo carsRepo;

    public CarsController(CarsRepo carsRepo) {
        this.carsRepo = carsRepo;
    }

    @GetMapping ("/cars")
    public List<Cars> getAllCars() {
        List<Cars> cars = carsRepo.findAll();
        return cars;
    }

    @GetMapping("/cars/{id}")
    Cars getCarById(@PathVariable int id) {
        Optional<Cars> cars = carsRepo.findById(id);
        if (cars.isEmpty()){
            throw new RuntimeException();
        }
        return carsRepo.findById(id).orElse(null);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PutMapping("/cars/{id}")
    void updateCar(@RequestBody Cars newCar, @PathVariable int id) {
        carsRepo.findById(id)
                .map(car -> {
                    car.setName(newCar.getName());
                    car.setYear(newCar.getYear());
                    car.setDescription(newCar.getDescription());
                    car.setImage_Url(newCar.getImage_Url());
                    return carsRepo.save(car);
                });
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/cars/{id}")
    void deleteCar(@PathVariable int id) {
        carsRepo.deleteById(id);
    }
}
