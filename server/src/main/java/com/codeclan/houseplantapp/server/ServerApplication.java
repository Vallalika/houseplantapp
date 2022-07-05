package com.codeclan.houseplantapp.server;

import com.codeclan.houseplantapp.server.classes.CareTask;
import com.codeclan.houseplantapp.server.classes.Garden;
import com.codeclan.houseplantapp.server.classes.Plant;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.config.Task;

import java.time.LocalDate;

@SpringBootApplication
public class ServerApplication {

	public static void main(String[] args) {
//		SpringApplication.run(ServerApplication.class, args);
//		CareTask myTask;
//		LocalDate aDate;
//
//		aDate = LocalDate.of(2022,7,3);
//
//		myTask = CareTask
//				.builder()
//				.taskName("Water all the plants in the garden")
//				.taskDate(aDate)
//				.completed(true)
//				.build();
//		System.out.println(myTask);

		Plant myPlant = Plant
				.builder()
				.plantNameOne("Cheese plant")
				.temperature("Over 18 degrees")
				.growingSeason("June/July")
				.light("Indirect sunlight")
				.water("Slightly humid, stop regular watering schedule if plant is crying")
				.humidity("loves it")
				.build();
		System.out.println(myPlant);
	}

}
