package com.statuesrestorationsplus.RestorationManagerServer.controllers;

import com.statuesrestorationsplus.RestorationManagerServer.data.ProjectRepository;
import com.statuesrestorationsplus.RestorationManagerServer.models.Client;
import com.statuesrestorationsplus.RestorationManagerServer.models.Project;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("project")
public class ProjectController {

    @Autowired
    private ProjectRepository projectRepository;

    @GetMapping("")
    public Iterable<Project> getAllProjects(){
        return projectRepository.findAll();
    }
}
