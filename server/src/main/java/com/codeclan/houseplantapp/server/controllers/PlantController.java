package com.codeclan.houseplantapp.server.controllers;

import com.codeclan.houseplantapp.server.classes.CareTask;
import com.codeclan.houseplantapp.server.classes.Plant;
import com.codeclan.houseplantapp.server.repositories.PlantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PlantController {

    @Autowired
    PlantRepository plantRepository;

    @GetMapping(value = "/api/plants")
    public ResponseEntity<List<Plant>> getAllPlants(){
        return new ResponseEntity<>(plantRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/api/plants/{id}")
    public ResponseEntity getPlant(@PathVariable Long id){
        return new ResponseEntity<>(plantRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/api/plants")
    public ResponseEntity<Plant> createPlant(@RequestBody Plant plant){
        plantRepository.save(plant);
        return new ResponseEntity<>(plant, HttpStatus.CREATED);
    }

    @DeleteMapping(value = "/api/plants/{id}")
    public ResponseEntity deletePlantByID(@PathVariable Long id) {
        plantRepository.deleteById(id);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    @PutMapping(value = "/api/plants/{id}")
    public ResponseEntity updatePlantById(@RequestBody Plant plant, @PathVariable Long id) {
        plant.setId(id);
        plantRepository.save(plant);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

}