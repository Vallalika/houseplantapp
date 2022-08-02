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
                "Available routes for this API: <br /> <br />" +
                "&nbsp; /gardens <br />" +
                "&nbsp; /gardens/{id} <br /> <br />" +
                "&nbsp; /plants <br />" +
                "&nbsp; /plants/{id} <br /> <br />" +
                "&nbsp; /careTasks <br />" +
                "&nbsp; /careTasks/{id} <br />" +
                "&nbsp; /toDo"
                );
    }
}