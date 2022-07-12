package com.codeclan.houseplantapp.server.components;

import com.codeclan.houseplantapp.server.classes.CareTask;
import com.codeclan.houseplantapp.server.classes.Garden;
import com.codeclan.houseplantapp.server.classes.Plant;
import com.codeclan.houseplantapp.server.repositories.CareTaskRepository;
import com.codeclan.houseplantapp.server.repositories.GardenRepository;
import com.codeclan.houseplantapp.server.repositories.PlantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Profile("!test")
//@Component

public class DataLoader implements ApplicationRunner {

    @Autowired
    CareTaskRepository careTaskRepository;

    @Autowired
    GardenRepository gardenRepository;

    @Autowired
    PlantRepository plantRepository;

    public DataLoader(){

    };

    @Override
    public void run(ApplicationArguments args){

        Garden livingRoom = Garden
                .builder()
                .gardenName("Living room")
                .build();
        gardenRepository.save(livingRoom);

        Plant dragonPlant = Plant
                .builder()
                .plantNameOne("Dragon Plant")
                .plantNameTwo("Dracaena Marginata")
                .status("Healthy")
                .light("Indirect sunlight or partial shade")
                .temperature("15 to 26 degrees")
                .water("Slightly humid near the roots, avoid soggy soil")
                .soil("Well-draining, Perlites, Neutral to Slightly acidic")
                .nutrients("Slow release fertiliser in Spring, or liquid NPK 3-1-2 fertiliser diluted in water for half strength")
                .pruning("Not needed but can prune weak branches")
                .repotting("Every 2 to 3 years with a top soil refresh every year for nutrients")
                .garden(livingRoom)
                .imageUrl("http://localhost:8080/tomatoplant.jpg")
                .build();
        plantRepository.save(dragonPlant);


        Plant cheesePlant = Plant
                .builder()
                .plantNameOne("Cheese Plant")
                .status("Healthy")
                .light("Indirect bright sunlight")
                .temperature("Over 18 degrees")
                .water("Humid near roots, stop watering when plant is crying")
                .soil("Well-draining, Neutral to Slightly acidic")
                .nutrients("During growing season, once a month")
                .pruning("Not needed, can tuck aerial roots back in pot")
                .repotting("Every 2 to 3 years with a top soil refresh every year for nutrients")
                .garden(livingRoom)
                .build();
        plantRepository.save(cheesePlant);

        livingRoom.addPlant(cheesePlant);
        livingRoom.addPlant(dragonPlant);


        CareTask myFirstTask = CareTask
                .builder()
                .title("Water plant")
                .plant(cheesePlant)
                .start(LocalDate.of(2022,07,03))
                .end(LocalDate.of(2022,07,03))
                .build();
        careTaskRepository.save(myFirstTask);

        CareTask mySecondTask = CareTask
                .builder()
                .title("Repot")
                .plant(dragonPlant)
                .start(LocalDate.of(2022,07,07))
                .end(LocalDate.of(2022,07,07))
                .build();
        careTaskRepository.save(mySecondTask);

    }

}