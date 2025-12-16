package com.vitabridge.backend.web.dto;

import lombok.Data;

@Data
public class CreateDoctorRequest {
    private String phoneNumber;
    private String password;
    private String email;
    private String firstName;
    private String lastName;
    private String specialization;
    private String licenseNumber;
}