package com.codeclan.houseplantapp.server;

import com.codeclan.houseplantapp.server.classes.CareTask;
import org.junit.Before;
import org.junit.Test;
import org.springframework.test.context.ActiveProfiles;

import static org.junit.Assert.*;

import java.time.LocalDate;


@ActiveProfiles("test")
public class CareTaskTest {

    private CareTask myTask;
    private LocalDate aDate;

    @Before
    public void before() {
        aDate = LocalDate.of(2022,7,3);

        myTask = CareTask
                .builder()
                .title("Water all the plants in the garden")
                .start(aDate)
                .end(aDate)
                .build();
    }

    @Test
    public void hasName() {
        assertEquals("Water all the plants in the garden", myTask.getTitle());
    }

    @Test
    public void hasDate() {
        LocalDate newDate = LocalDate.of(2022,7,3);
        assertEquals(newDate, myTask.getStart());
    }

    @Test
    public void startsWithCompletedStatusFalse() {
        assertFalse(myTask.isCompleted());
    }

    @Test
    public void startsWithNullDescription() {
        assertNull(myTask.getTaskDescription());
    }

    @Test
    public void startsWithAllDayTrue() {
        assertTrue(myTask.getAllDay());
    }

}
