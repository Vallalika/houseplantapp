package com.codeclan.houseplantapp.server.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.view.RedirectView;

@RestController
public class ApiController {

    @GetMapping(value="/")
    public RedirectView redirectToApiRoute(RedirectAttributes attributes){
        attributes.addAttribute("baseUrl", "/");
        return new RedirectView("api");
    }

    @GetMapping(value = "/api")
    public String apiRoutes () {
        return (
                "Base URL for this API: /api <br > <br />" +
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