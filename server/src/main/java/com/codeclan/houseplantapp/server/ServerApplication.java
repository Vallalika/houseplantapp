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
		Plant myPlant = Plant
				.builder()
				.plantNameOne("Calathea Rufibarba")
				.light("Bright indirect or partial shade")
				.water("Keep moist at all times, no puddles at the top when watering")
				.temperature("15 to 20C")
				.build();
		System.out.println(myPlant);

		Garden myGarden = Garden
				.builder()
				.gardenName("living room")
				.hardinessZone("EH7")
				.build();
		System.out.println(myGarden);

		LocalDate taskDate = LocalDate.of(2020,1,8);

		CareTask myTask = CareTask
				.builder()
				.taskName("Repot Calathea")
				.date(taskDate)
				.build();
		System.out.println(myTask);
	}

}
