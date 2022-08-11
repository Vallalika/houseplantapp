package com.codeclan.houseplantapp.server.controllers;

import com.codeclan.houseplantapp.server.classes.CareTask;
import com.codeclan.houseplantapp.server.repositories.CareTaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@RestController
public class CareTaskController {

    @Autowired
    CareTaskRepository careTaskRepository;

    @GetMapping(value = "/api/careTasks")
    public ResponseEntity getAllCareTasksSorted() {
        return new ResponseEntity(careTaskRepository.findByOrderByStartDescIdDesc(), HttpStatus.OK);
    }

    @GetMapping(value = "/api/toDo")
    public ResponseEntity getToDoCareTasks() {
        LocalDate todaysDate = LocalDate.now();
        List<CareTask> finalQueryResults = new ArrayList<>();
        List<CareTask> firstQueryResults = careTaskRepository.findByCompletedFalseAndStartLessThanOrderByStartDescIdDesc(todaysDate);
        List<CareTask> secondQueryResults = careTaskRepository.findByStartOrderByIdDesc(todaysDate);
        finalQueryResults.addAll(firstQueryResults);
        finalQueryResults.addAll(secondQueryResults);

        return new ResponseEntity(finalQueryResults, HttpStatus.OK);
    }

    @GetMapping(value = "/api/careTasks/{id}")
    public ResponseEntity getTask(@PathVariable Long id){
        return new ResponseEntity<>(careTaskRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/api/careTasks")
    public ResponseEntity<CareTask> createCareTask(@RequestBody CareTask task){
        careTaskRepository.save(task);
        return new ResponseEntity<>(task, HttpStatus.CREATED);
    }

    @DeleteMapping(value = "/api/careTasks/{id}")
    public ResponseEntity deleteTaskByID(@PathVariable Long id) {
        careTaskRepository.deleteById(id);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    @PutMapping(value = "/api/careTasks/{id}")
    public ResponseEntity updateTaskById(@RequestBody CareTask task, @PathVariable Long id) {
        task.setId(id);
        careTaskRepository.save(task);
        return new ResponseEntity(task,HttpStatus.OK);
    }
}