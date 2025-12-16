package com.vitabridge.backend.config;

import com.vitabridge.backend.domain.AppUser;
import com.vitabridge.backend.domain.AppUserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
@Slf4j
public class DataInitializer implements CommandLineRunner {

    private final AppUserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) {
        // Check if admin already exists
        if (!userRepository.existsByPhoneNumber("admin")) {
            AppUser admin = new AppUser();
            admin.setPhoneNumber("admin");
            admin.setPassword(passwordEncoder.encode("admin123"));
            admin.setRole(AppUser.Role.ADMIN);
            userRepository.save(admin);

            log.info("=================================================");
            log.info("DEFAULT ADMIN CREATED");
            log.info("Phone Number: admin");
            log.info("Password: admin123");
            log.info("PLEASE CHANGE THIS PASSWORD IN PRODUCTION!");
            log.info("=================================================");
        }
    }
}
