package com.vitabridge.backend.web.dto;

import lombok.*;

@Data
@AllArgsConstructor
public class LoginResponse {
    private String token;
    private String role;
    private Long uid;
}
