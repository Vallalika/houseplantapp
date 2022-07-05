package com.codeclan.houseplantapp.server.classes;

import lombok.Builder;
import lombok.Data;
import lombok.NonNull;

import java.util.ArrayList;

@Builder
@Data
public class Garden {

    @NonNull
    private String gardenName;
    private String hardinessZone;
    private ArrayList<Plant> plantList;

}