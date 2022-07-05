package com.codeclan.houseplantapp.server.classes;

import lombok.Builder;
import lombok.Data;
import lombok.NonNull;

import java.time.LocalDate;

@Builder
@Data
public class CareTask {

    @NonNull
    private String taskName;
    private String taskDescription;
    @NonNull
    private LocalDate date;
    private boolean completed;

}
