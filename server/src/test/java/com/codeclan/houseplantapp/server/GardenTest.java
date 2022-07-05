package com.codeclan.houseplantapp.server;

import com.codeclan.houseplantapp.server.classes.Garden;
import com.codeclan.houseplantapp.server.classes.Plant;
import org.junit.Before;
import org.junit.Test;
import org.springframework.test.context.ActiveProfiles;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNull;

@ActiveProfiles("test")
public class GardenTest {

    private Garden myGarden;

    @Before
    public void before() {
        myGarden = Garden
                .builder()
                .gardenName("living-room")
                .build();
    }

    @Test
    public void hasName() {
        assertEquals("living-room",myGarden.getGardenName());
    }

    @Test
    public void startsWithNoPlant() {
        assertNull(myGarden.getPlantList());
    }

}
