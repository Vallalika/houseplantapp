package com.codeclan.houseplantapp.server.repositories;

import com.codeclan.houseplantapp.server.classes.Plant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlantRepository extends JpaRepository <Plant, Long> {
}
