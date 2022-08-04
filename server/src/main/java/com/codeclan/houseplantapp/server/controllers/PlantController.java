package com.codeclan.houseplantapp.server.controllers;

import com.codeclan.houseplantapp.server.classes.CareTask;
import com.codeclan.houseplantapp.server.classes.Plant;
import com.codeclan.houseplantapp.server.repositories.CareTaskRepository;
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

    @Autowired
    CareTaskRepository careTaskRepository;

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
    public ResponseEntity<String> deletePlantByID(@PathVariable Long id) {
//        Solution without Cascade
//        List<CareTask> relatedTasks = careTaskRepository.findByPlant_Id(id);
//        if (relatedTasks.size() == 0) {
//            plantRepository.deleteById(id);
//        } else {
//            //Optional<Plant> plant = plantRepository.findById(id);
//            //for(CareTask task: relatedTasks){
//             ///   careTaskRepository.deleteByPlantId(task.getPlant().getId());
//            //}
//            //careTaskRepository.deleteByPlantId(plant.get().getId());
//            plantRepository.deleteById(id);
//        };
        try {
            plantRepository.deleteById(id);
            return new ResponseEntity("Plant Deleted", HttpStatus.OK);
        }
        catch(Exception e){
            return new ResponseEntity("Plant Problem, Can't delete plant with id " + id, HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping(value = "/api/plants/{id}")
    public ResponseEntity updatePlantById(@RequestBody Plant plant, @PathVariable Long id) {
        plant.setId(id);
        plantRepository.save(plant);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

}