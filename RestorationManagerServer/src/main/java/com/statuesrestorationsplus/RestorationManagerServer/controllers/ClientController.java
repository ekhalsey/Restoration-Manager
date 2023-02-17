package com.statuesrestorationsplus.RestorationManagerServer.controllers;

import com.statuesrestorationsplus.RestorationManagerServer.data.ClientRepository;
import com.statuesrestorationsplus.RestorationManagerServer.models.Client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("client")
public class ClientController {

    @Autowired
    private ClientRepository clientRepository;

    @GetMapping("")
    public Iterable<Client> getAllClients(){
        return clientRepository.findAll();
    }

    @PostMapping("add")
    void addUser(@RequestBody Client user) {
        //Client newClient = new Client(user.getClientName(), user.getEmail(), user.getPwHash());
        clientRepository.save(user);
    }

    @GetMapping("/{id}")
    public Optional<Client> getClientById(@PathVariable("id") Integer id) {
        return clientRepository.findById(id);
    }

}
