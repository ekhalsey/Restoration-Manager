package com.statuesrestorationsplus.RestorationManagerServer.controllers;

import com.statuesrestorationsplus.RestorationManagerServer.data.ProjectRepository;
import com.statuesrestorationsplus.RestorationManagerServer.data.ClientRepository;
import com.statuesrestorationsplus.RestorationManagerServer.models.Project;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("project")
public class ProjectController {

    @Autowired
    private ProjectRepository projectRepository;

    private  ClientRepository clientRepository;

    @GetMapping("")
    public Iterable<Project> getAllProjects(){
        return projectRepository.findAll();
    }
    @PostMapping("add")
    void addProject(@RequestBody Project project) {
//        clientRepository.save(project.getClient());
        projectRepository.save(project);
    }

    @GetMapping("/{id}")
    public Optional<Project> getProjectById(@PathVariable("id") Integer id) {
        return projectRepository.findById(id);
    }
}
