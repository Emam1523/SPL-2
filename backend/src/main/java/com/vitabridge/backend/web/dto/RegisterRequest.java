package com.vitabridge.backend.web.dto;

import lombok.Data;

@Data
public class RegisterRequest {
    private String phoneNumber;
    private String password;
    private String firstName;
    private String lastName;
}