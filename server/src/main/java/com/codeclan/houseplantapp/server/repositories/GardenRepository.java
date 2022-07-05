package com.codeclan.houseplantapp.server.repositories;

import com.codeclan.houseplantapp.server.classes.Garden;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GardenRepository extends JpaRepository<Garden, Long> {



}
