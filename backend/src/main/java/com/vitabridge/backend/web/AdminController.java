package com.vitabridge.backend.web;

import com.vitabridge.backend.service.AdminService;
import com.vitabridge.backend.web.dto.CreateDoctorRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {

    private final AdminService adminService;

    @PostMapping("/doctors")
    public ResponseEntity<String> createDoctor(@RequestBody CreateDoctorRequest request) {
        return ResponseEntity.ok(adminService.createDoctor(request));
    }
}