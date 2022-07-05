package com.codeclan.houseplantapp.server.classes;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="gardens")

@AllArgsConstructor
@NoArgsConstructor

@Builder
@Data
public class Garden {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "garden_name")
    @NonNull
    private String gardenName;

    @Column(name = "hardiness_zone")
    private String hardinessZone;

    @JsonIgnoreProperties({"garden"})
    @OneToMany(mappedBy = "garden", fetch = FetchType.LAZY)
    private List<Plant> plantList;

}