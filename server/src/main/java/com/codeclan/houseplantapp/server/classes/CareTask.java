package com.codeclan.houseplantapp.server.classes;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name="care_tasks")

@AllArgsConstructor
@NoArgsConstructor

@Builder
@Data

public class CareTask {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "task_name")
    @NonNull
    private String title;

    @Column(name = "task_description")
    private String taskDescription;

    @Column(name = "all_day")
    @Builder.Default
    private Boolean allDay = true;

    @Column(name = "task_start")
    @NonNull
    private LocalDate start;

    @Column(name = "task_end")
    @NonNull
    private LocalDate end;

    @Column(name = "completed")
    private boolean completed;

    @JsonIgnoreProperties({"taskList"})
    @ManyToOne
    @JoinColumn(name = "plant_id", nullable = false)
    private Plant plant;

}