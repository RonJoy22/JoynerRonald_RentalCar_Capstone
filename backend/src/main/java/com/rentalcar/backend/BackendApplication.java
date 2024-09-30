package com.rentalcar.backend;

import com.rentalcar.backend.model.Cars;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.List;
import java.util.logging.Logger;

@SpringBootApplication
public class BackendApplication {

	private static final Logger logger = Logger.getLogger(BackendApplication.class.getName());

	public static void main(String[] args) {

		SpringApplication.run(BackendApplication.class, args);
	}
	@Bean
	CommandLineRunner runner() {
		return args -> {
			Cars cars1 = new Cars(1, 2024, "Range Rover SV", "Toyota Camry", "$600/Day", "https://res.cloudinary.com/dxrwpoyrv/image/upload/v1727197220/pngimg.com_-_land_rover_PNG18_sgmvpn.png");
			Cars cars2 = new Cars(2, 2024, "Toyota Camry", "Toyota Camry", "$100/Day", "https://res.cloudinary.com/dxrwpoyrv/image/upload/v1727197220/pngimg.com_-_land_rover_PNG18_sgmvpn.png");
			List<Cars> cars = List.of(cars1);
		};
	}
}