package com.statuesrestorationsplus.RestorationManagerServer.models;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Entity
public class Project extends AbstractEntity{
    private String name;
    private LocalDate dueDate;

    @ManyToOne
    @JoinColumn(name = "client_id")
    @Valid
    private Client client;

    public Project() {
    }

    public Project(String name, LocalDate dueDate, Client client) {
        this.name = name;
        this.dueDate = dueDate;
        this.client = client;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDate getDueDate() {
        return dueDate;
    }

    public void setDueDate(LocalDate dueDate) {
        this.dueDate = dueDate;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }
}
