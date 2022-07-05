package com.codeclan.houseplantapp.server.components;

import com.codeclan.houseplantapp.server.classes.Plant;
import com.codeclan.houseplantapp.server.repositories.CareTaskRepository;
import com.codeclan.houseplantapp.server.repositories.GardenRepository;
import com.codeclan.houseplantapp.server.repositories.PlantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

@Profile("!test")
@Component

public class DataLoader implements ApplicationRunner {

    @Autowired
    CareTaskRepository careTaskRepository;

    @Autowired
    GardenRepository gardenRepository;

    @Autowired
    PlantRepository plantRepository;

    public DataLoader(){

    };

    public void run(ApplicationArguments args){

        Plant dragonPlant = Plant
                .builder()
                .plantNameOne("Dragon Plant")
                .plantNameTwo("Dracaena Marginata")
                .light("Indirect sunlight or partial shade")
                .water("Slightly humid near the roots, avoid soggy soil")
                .soil("Well-draining, Perlites, Neutral to Slightly acidic")
                .nutrient("Slow release fertiliser in Spring, or liquid NPK 3-1-2 fertiliser diluted in water for half strength")
                .pruning("Not needed but can prune weak branches")
                .repotting("Every 2 to 3 years with a top soil refresh every year for nutrients")
                .build();
        plantRepository.save(dragonPlant);

    }

}