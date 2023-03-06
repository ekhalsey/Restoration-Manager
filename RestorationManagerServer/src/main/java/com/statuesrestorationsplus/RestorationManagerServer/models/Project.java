package com.statuesrestorationsplus.RestorationManagerServer.models;

import javax.persistence.CascadeType;
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

    private String notes;

    private String photo;

    private Integer quotedPrice;

    @ManyToOne(cascade= CascadeType.ALL)
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

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public Integer getQuotedPrice() {
        return quotedPrice;
    }

    public void setQuotedPrice(Integer quotedPrice) {
        this.quotedPrice = quotedPrice;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }
}
