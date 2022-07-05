package com.codeclan.houseplantapp.server.controllers;

import com.codeclan.houseplantapp.server.classes.CareTask;
import com.codeclan.houseplantapp.server.classes.Plant;
import com.codeclan.houseplantapp.server.repositories.CareTaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CareTaskController {

    @Autowired
    CareTaskRepository careTaskRepository;

    @GetMapping(value = "/careTasks")
    public ResponseEntity<List<CareTask>> getAllTasks(){
        return new ResponseEntity<>(careTaskRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/careTasks/{id}")
    public ResponseEntity getTask(@PathVariable Long id){
        return new ResponseEntity<>(careTaskRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/careTasks")
    public ResponseEntity<CareTask> createCareTask(@RequestBody CareTask task){
        careTaskRepository.save(task);
        return new ResponseEntity<>(task, HttpStatus.CREATED);
    }

}
