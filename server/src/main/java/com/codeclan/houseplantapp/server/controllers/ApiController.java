package com.codeclan.houseplantapp.server.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiController {

    @GetMapping(value = "/")
    public String displayMessage () {
        return "Please go to \"/api\" to use this api.";
    };

    @GetMapping(value = "/api")
    public String apiRoutes () {
        return (
                "Available routes for this API:<br />" +
                "- /gardens and /gardens/{id}: retrieve all gardens or one garden by id <br />" +
                "- /plants and /plants/{id}: retrieve all plants or one plant by id <br />" +
                "- /careTasks and /careTasks/{id}: retrieve all tasks or one task by id <br />" +
                "- /toDo: retrieve all to-do list tasks"
                );
    }
}