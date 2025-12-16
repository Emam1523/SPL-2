package com.vitabridge.backend.domain;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "app_users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AppUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;

    @Column(unique = true, nullable = false)
    private String phoneNumber;

    @Column(nullable = false)
    private String password;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Role role;

    public enum Role {
        PATIENT, DOCTOR, ASSISTANT, ADMIN
    }

    public AppUser(String phoneNumber, String password, Role role) {
        this.phoneNumber = phoneNumber;
        this.password = password;
        this.role = role;
    }
}
