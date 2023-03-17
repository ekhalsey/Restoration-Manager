package com.statuesrestorationsplus.RestorationManagerServer.controllers;

import com.statuesrestorationsplus.RestorationManagerServer.data.ProjectRepository;
import com.statuesrestorationsplus.RestorationManagerServer.data.ClientRepository;
import com.statuesrestorationsplus.RestorationManagerServer.models.Project;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
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

    @GetMapping("client/{id}")
    public ArrayList<Integer> getProjectIdsByClientId(@PathVariable("id") Integer id) {
        List<Project[]> projects;
        ArrayList<Integer> projectIds = new ArrayList<>();

        Iterable<Project> allProjects = projectRepository.findAll();

        for (Project project : allProjects) {
            if (project.getClient().getId() == id) {
                projectIds.add(project.getId());
            };
        }

        return projectIds;
    }
}
