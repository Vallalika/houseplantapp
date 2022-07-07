package com.codeclan.houseplantapp.server;

import com.codeclan.houseplantapp.server.classes.CareTask;
import com.codeclan.houseplantapp.server.classes.Garden;
import com.codeclan.houseplantapp.server.classes.Plant;
import org.junit.Before;
import org.junit.Test;
import org.springframework.test.context.ActiveProfiles;

import java.time.LocalDate;

import static org.junit.Assert.*;

@ActiveProfiles("test")
public class PlantTest {

    private Plant myPlant;
    private Garden myGarden;
    private CareTask myTask;
    private LocalDate aDate;

    @Before
    public void before() {
        myGarden = Garden
                .builder()
                .gardenName("living room")
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

        aDate = LocalDate.of(2022,7,3);

        myTask = CareTask
                .builder()
                .taskName("Water all the plants in the garden")
                .taskDate(aDate)
                .build();

    }

    @Test
    public void hasFirstName() {
        assertEquals("Cheese plant",myPlant.getPlantNameOne());
    }

    @Test
    public void hasAcquisitionDate() {
        assertEquals(LocalDate.of(2022,01,26),myPlant.getAcquisitionDate());
    }

    @Test
    public void hasGrowingSeason() {
        assertEquals("June/July",myPlant.getGrowingSeason());
    }

    @Test
    public void hasLightProp() {
        assertEquals("Indirect sunlight",myPlant.getLight());
    }

    @Test
    public void hasHumidityProp() {
        assertEquals("loves it",myPlant.getHumidity());
    }


    @Test
    public void hasWater() {
        assertEquals("Slightly humid, stop regular watering schedule if plant is crying",myPlant.getWater());
    }

    @Test
    public void hasTemperature() {
        assertEquals("Over 18 degrees",myPlant.getTemperature());
    }

    @Test
    public void hasGarden() {
        assertEquals(myGarden,myPlant.getGarden());
    }

    @Test
    public void canSetName() {
        myPlant.setPlantNameOne("Lollipop");
        assertEquals("Lollipop", myPlant.getPlantNameOne());
    }

    @Test
    public void startsWithEmptyTaskList() {
        assertEquals(0,myPlant.getTaskList().size());
    }

    @Test
    public void canAddTask() {
        myPlant.addTask(myTask);
        assertEquals(1, myPlant.getTaskList().size());
    }

    @Test
    public void canRemovePlant() {
        myPlant.addTask(myTask);
        myPlant.removeTask(myTask);
        assertEquals(0, myPlant.getTaskList().size());
    }
}