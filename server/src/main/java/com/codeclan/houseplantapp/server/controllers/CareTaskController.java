package com.codeclan.houseplantapp.server.controllers;

import com.codeclan.houseplantapp.server.classes.CareTask;
import com.codeclan.houseplantapp.server.repositories.CareTaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.w3c.dom.html.HTMLElement;

import java.time.LocalDate;
import java.util.Optional;

@RestController
public class CareTaskController {

    @Autowired
    CareTaskRepository careTaskRepository;

    @GetMapping(value = "/careTasks")
    public ResponseEntity getAllCareTasksAndFilters(
            @RequestParam(required = false, name = "completed") String completedStatus,
            @RequestParam(required = false, name = "date") String date,
            @RequestParam(required = false, name = "today") String today
    ) {

        if (completedStatus != null) {
            if (completedStatus.equalsIgnoreCase("incomplete")) {
                return new ResponseEntity(careTaskRepository.findByCompleted(false), HttpStatus.OK);
            } else {
                return new ResponseEntity(careTaskRepository.findByCompleted(true), HttpStatus.OK);
            }
        }

        if (date != null) {
            LocalDate convertedDate = LocalDate.parse(date);
            return new ResponseEntity(careTaskRepository.findByTaskDate(convertedDate),HttpStatus.OK);
        }

        if (today != null) {
            LocalDate todaysDate = LocalDate.now();
            return new ResponseEntity(careTaskRepository.findByTaskDate(todaysDate), HttpStatus.OK);
        }

        // default: we have none of the query strings GET /careTasks
        return new ResponseEntity(careTaskRepository.findAll(), HttpStatus.OK);
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

    @DeleteMapping(value = "/careTasks/{id}")
    public ResponseEntity deleteTaskByID(@PathVariable Long id) {
        careTaskRepository.deleteById(id);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    @PutMapping(value = "/careTasks/{id}")
    public ResponseEntity updateTaskById(@RequestBody CareTask task, @PathVariable Long id) {
        task.setId(id);
        careTaskRepository.save(task);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}