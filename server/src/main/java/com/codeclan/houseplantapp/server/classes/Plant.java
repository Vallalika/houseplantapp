package com.codeclan.houseplantapp.server.classes;

import lombok.*;
import org.springframework.scheduling.config.Task;

import java.util.ArrayList;

@Builder
@Data
public class Plant {
    @NonNull
    private String plantNameOne;
    private String plantNameTwo;
    private String origin;
    private String growingSeason;
    @NonNull
    private String light;
    @NonNull
    private String water;
    @NonNull
    private String temperature;
    private String humidity;
    private String soil;
    private String pruning;
    private String repotting;
    private String notes;
    private ArrayList<Task> taskList;
}
