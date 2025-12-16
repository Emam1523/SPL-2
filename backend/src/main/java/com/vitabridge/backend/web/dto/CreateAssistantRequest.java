package com.vitabridge.backend.web.dto;

import lombok.Data;

@Data
public class CreateAssistantRequest {
    private String phoneNumber;
    private String password;
    private String email;
    private String firstName;
    private String lastName;
}