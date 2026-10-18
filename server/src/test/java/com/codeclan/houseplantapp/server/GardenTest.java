package com.codeclan.houseplantapp.server;

import com.codeclan.houseplantapp.server.classes.Garden;
import com.codeclan.houseplantapp.server.classes.Plant;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.test.context.ActiveProfiles;

import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.assertEquals;

@ActiveProfiles("test")
public class GardenTest {

    private Garden myGarden;
    private Plant myPlant;

    @BeforeEach
    public void before() {
        myGarden = Garden
                .builder()
                .gardenName("living-room")
                .build();

        myPlant = Plant
                .builder()
                .plantNameOne("Cheese plant")
                .acquisitionDate(LocalDate.of(2022,01,26))
                .status("Healthy")
                .temperature("Over 18 degrees")
                .growingSeason("June/July")
                .light("Indirect sunlight")
                .water("Slightly humid, stop regular watering schedule if plant is crying")
                .humidity("loves it")
                .garden(myGarden)
                .build();
    }

    @Test
    public void hasName() {
        assertEquals("living-room",myGarden.getGardenName());
    }

    @Test
    public void startsWithNoPlant() {
        assertEquals(0,myGarden.getPlantList().size());
    }

    @Test
    public void canAddPlant() {
        myGarden.addPlant(myPlant);
        assertEquals(1, myGarden.getPlantList().size());
    }

    @Test
    public void canRemovePlant() {
        myGarden.addPlant(myPlant);
        myGarden.removePlant(myPlant);
        assertEquals(0,myGarden.getPlantList().size());
    }

}
