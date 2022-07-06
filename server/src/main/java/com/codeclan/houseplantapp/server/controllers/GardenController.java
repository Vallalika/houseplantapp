package com.codeclan.houseplantapp.server.controllers;

import com.codeclan.houseplantapp.server.classes.Garden;
import com.codeclan.houseplantapp.server.classes.Plant;
import com.codeclan.houseplantapp.server.repositories.GardenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class GardenController {

    @Autowired
    GardenRepository gardenRepository;

    @GetMapping(value = "/gardens")
    public ResponseEntity<List<Garden>> getAllGardens(){
        return new ResponseEntity<>(gardenRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/gardens/{id}")
    public ResponseEntity getGarden(@PathVariable Long id){
        return new ResponseEntity<>(gardenRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/gardens")
    public ResponseEntity<Garden> createGarden(@RequestBody Garden garden){
        gardenRepository.save(garden);
        return new ResponseEntity<>(garden, HttpStatus.CREATED);
    }

    @DeleteMapping(value = "/gardens/{id}")
    public ResponseEntity deleteGardenByID(@PathVariable Long id) {
        gardenRepository.deleteById(id);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    @PutMapping(value = "/gardens/{id}")
    public ResponseEntity updateGardenById(@RequestBody Garden garden, @PathVariable Long id) {
        garden.setId(id);
        gardenRepository.save(garden);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
