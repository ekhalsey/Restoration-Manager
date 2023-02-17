package com.statuesrestorationsplus.RestorationManagerServer.models;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Client extends AbstractEntity {

    @NotBlank
    private String clientName;

    private int phoneNumber;

    private String email;

    @OneToMany
    @Valid
    @NotNull
    private List<Project> projects;

    public Client() {
    }

    public Client(String clientName, int phoneNumber, String email) {
        this.clientName = clientName;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    public String getClientName() {
        return clientName;
    }

    public void setClientName(String clientName) {
        this.clientName = clientName;
    }

    public int getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(int phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
