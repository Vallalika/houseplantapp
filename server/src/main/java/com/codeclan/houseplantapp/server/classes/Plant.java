package com.codeclan.houseplantapp.server.classes;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import org.springframework.scheduling.config.Task;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;


@Entity
@Table(name="plants")

@AllArgsConstructor
@NoArgsConstructor

@Builder
@Data
public class Plant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "plant_name_one")
    @NonNull
    private String plantNameOne;

    @Column(name = "plant_name_two")
    private String plantNameTwo;

    @Column(name = "origin")
    private String origin;

    @Column(name = "acquisition_date")
    private LocalDate acquisitionDate;

    @NonNull
    @Column(name = "status")
    private String status;

    @Column(name = "growing_season")
    private String growingSeason;

    @Column(name = "light")
    @NonNull
    private String light;

    @Column(name = "water")
    @NonNull
    private String water;

    @Column(name = "temperature")
    private String temperature;

    @Column(name = "nutrients")
    private String nutrients;

    @Column(name = "humidity")
    private String humidity;

    @Column(name = "soil")
    private String soil;

    @Column(name = "pruning")
    private String pruning;

    @Column(name = "repotting")
    private String repotting;

    @Column(name = "notes")
    private String notes;

    @Builder.Default
    @Column(name = "image_url")
    private String imageUrl = "http://localhost:8080/noimage.jpg";

    @NonNull
    @JsonIgnoreProperties({"plants"})
    @ManyToOne
    @JoinColumn(name = "garden_id", nullable = false)
    private Garden garden;

    @JsonIgnoreProperties({"plant"})
    @OneToMany(mappedBy = "plant", fetch = FetchType.LAZY,cascade = CascadeType.REMOVE)
    @Builder.Default
    private List<CareTask> taskList = new ArrayList<>();

    public void addTask(CareTask task) {
        this.taskList.add(task);
    }

    public void removeTask(CareTask task) {
        this.taskList.remove(task);
    }

}