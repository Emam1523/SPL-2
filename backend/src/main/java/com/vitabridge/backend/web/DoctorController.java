package com.vitabridge.backend.web;

import com.vitabridge.backend.service.DoctorService;
import com.vitabridge.backend.web.dto.CreateAssistantRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/doctor")
@RequiredArgsConstructor
public class DoctorController {

    private final DoctorService doctorService;

    @PostMapping("/assistants")
    public ResponseEntity<String> createAssistant(
            Authentication auth,
            @RequestBody CreateAssistantRequest request) {
        String doctorPhoneNumber = auth != null ? (String) auth.getPrincipal() : null;

        if (doctorPhoneNumber == null) {
            return ResponseEntity.status(401).body("Unauthorized");
        }

        return ResponseEntity.ok(doctorService.createAssistant(doctorPhoneNumber, request));
    }
}
