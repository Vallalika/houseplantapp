package com.codeclan.houseplantapp.server;

import com.codeclan.houseplantapp.server.classes.Plant;
import org.junit.Before;
import org.junit.Test;
import org.springframework.test.context.ActiveProfiles;

import java.time.LocalDate;

import static org.junit.Assert.*;

@ActiveProfiles("test")
public class PlantTest {

    private Plant myPlant;

    @Before
    public void before() {
        myPlant = Plant
                .builder()
                .plantNameOne("Cheese plant")
                .acquisitionDate(LocalDate.of(2022,01,26))
                .temperature("Over 18 degrees")
                .growingSeason("June/July")
                .light("Indirect sunlight")
                .water("Slightly humid, stop regular watering schedule if plant is crying")
                .humidity("loves it")
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
        assertEquals("Slightly humid, stop regular watering schedule if plant is crying",myPlant.getLight());
    }

    @Test
    public void hasTemperature() {
        assertEquals("Over 18 degrees",myPlant.getTemperature());
    }

    @Test
    public void canSetName() {
        myPlant.setPlantNameOne("Lollipop");
        assertEquals("Lollipop", myPlant.getPlantNameOne());
    }

    @Test
    public void startsWithEmptyTaskList() {
        assertNull(myPlant.getTaskList());
    }
}
