package com.statuesrestorationsplus.RestorationManagerServer.controllers;

import com.statuesrestorationsplus.RestorationManagerServer.data.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("client")
public class ClientController {

    @Autowired
    private ClientRepository clientRepository;
}
