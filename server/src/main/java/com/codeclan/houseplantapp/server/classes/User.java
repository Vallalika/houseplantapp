package com.codeclan.houseplantapp.server.classes;

import java.util.ArrayList;

public class User {

    private String username;
    private String email;
    private String password;
    private ArrayList<String> passwordHistory;
    private ArrayList<Garden> gardenList;

    public User(String username, String password, String email) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.passwordHistory = new ArrayList<>();
        this.gardenList = new ArrayList<>();
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public ArrayList<String> getPasswordHistory() {
        return passwordHistory;
    }
}
