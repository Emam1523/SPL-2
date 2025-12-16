package com.vitabridge.backend.service;

import com.vitabridge.backend.domain.*;
import com.vitabridge.backend.web.dto.*;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class DoctorService {

    private final AppUserRepository userRepository;
    private final DoctorRepository doctorRepository;
    private final AssistantRepository assistantRepository;
    private final PasswordEncoder passwordEncoder;

    @Transactional
    public String createAssistant(String doctorPhoneNumber, CreateAssistantRequest request) {
        if (userRepository.existsByPhoneNumber(request.getPhoneNumber())) {
            throw new RuntimeException("Phone number already registered");
        }

        AppUser doctorUser = userRepository.findByPhoneNumber(doctorPhoneNumber)
                .orElseThrow(() -> new RuntimeException("Doctor account not found"));

        if (doctorUser.getRole() != AppUser.Role.DOCTOR) {
            throw new RuntimeException("User is not a doctor");
        }

        Doctor doctor = doctorRepository.findByAppUser_Id(doctorUser.getId())
                .orElseThrow(() -> new RuntimeException("Doctor profile not found"));

        AppUser user = new AppUser();
        user.setPhoneNumber(request.getPhoneNumber());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole(AppUser.Role.ASSISTANT);
        user = userRepository.save(user);

        Assistant assistant = new Assistant();
        assistant.setAppUser(user);
        assistant.setDoctor(doctor);
        assistant.setEmail(request.getEmail());
        assistant.setFirstName(request.getFirstName());
        assistant.setLastName(request.getLastName());
        assistantRepository.save(assistant);

        return "Assistant created successfully";
    }
}
