package com.vitabridge.backend.service;

import com.vitabridge.backend.domain.*;
import com.vitabridge.backend.security.JwtUtil;
import com.vitabridge.backend.web.dto.*;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final AppUserRepository userRepository;
    private final PatientRepository patientRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    @Transactional
    public String registerPatient(RegisterRequest request) {
        if (userRepository.existsByPhoneNumber(request.getPhoneNumber())) {
            throw new RuntimeException("Phone number already registered");
        }

        AppUser user = new AppUser();
        user.setPhoneNumber(request.getPhoneNumber());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole(AppUser.Role.PATIENT);
        user = userRepository.save(user);

        Patient patient = new Patient();
        patient.setAppUser(user);
        patient.setFirstName(request.getFirstName());
        patient.setLastName(request.getLastName());
        patientRepository.save(patient);

        return "Patient registered successfully";
    }

    public LoginResponse login(LoginRequest request) {
        AppUser user = userRepository.findByPhoneNumber(request.getPhoneNumber())
                .orElseThrow(() -> new RuntimeException("Invalid credentials"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid credentials");
        }

        String token = jwtUtil.generateToken(user.getPhoneNumber(), user.getRole().name());
        return new LoginResponse(token, user.getRole().name(), user.getId());
    }
}