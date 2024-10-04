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
			Cars cars1 = new Cars(1, 2024, "2024 Range Rover SV ", "SV", "$300/Day", "https://res.cloudinary.com/dxrwpoyrv/image/upload/v1727197220/pngimg.com_-_land_rover_PNG18_sgmvpn.png");
			Cars cars2 = new Cars(2, 2024, "2024 Mercedes-Benz S580", "S580", "$300/Day", "https://res.cloudinary.com/dxrwpoyrv/image/upload/v1727197221/pngimg.com_-_mercedes_PNG80188_lsria4.png");
			Cars cars3 = new Cars(3, 2024, "2024 Bentley Bentayga", "Bentayga", "$300/Day", "https://res.cloudinary.com/dxrwpoyrv/image/upload/v1727197220/pngimg.com_-_bentley_PNG10_rxracq.png");
			Cars cars4 = new Cars(4, 2024, "2024 Lexus RC 350", "RC 350", "$300/Day", "https://res.cloudinary.com/dxrwpoyrv/image/upload/v1727197220/pngimg.com_-_lexus_PNG12_heykqe.png");
			Cars cars5 = new Cars(5, 2024, "2024 Porsche 911 GT3", "911 GT3", "$300/Day", "https://res.cloudinary.com/dxrwpoyrv/image/upload/v1727197221/pngimg.com_-_porsche_PNG102846_dkvrci.png");
			Cars cars6 = new Cars(6, 2024, "2024 Lamborghini Urus", "Urus", "$300/Day", "https://res.cloudinary.com/dxrwpoyrv/image/upload/v1727197220/pngimg.com_-_lamborghini_PNG102909_e1ovxq.png");
			List<Cars> cars = List.of(cars1, cars2, cars3, cars4, cars5, cars6);
		};
	}
}