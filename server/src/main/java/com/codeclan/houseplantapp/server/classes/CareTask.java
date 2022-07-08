package com.codeclan.houseplantapp.server.classes;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Optional;

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
    private String taskName;

    @Column(name = "task_description")
    private String taskDescription;

    @Column(name = "task_date")
    @NonNull
    private LocalDate taskDate;

    @Column(name = "completed")
    private boolean completed;

    @JsonIgnoreProperties({"taskList"})
    @ManyToOne
    @JoinColumn(name = "plant_id", nullable = false)
    private Plant plant;

}