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
                "Available routes for this API: <br />" +
                "&nbsp; /gardens and /gardens/{id} <br />" +
                "&nbsp; /plants and /plants/{id} <br />" +
                "&nbsp; /careTasks and /careTasks/{id} <br />" +
                "&nbsp; /toDo"
                );
    }
}