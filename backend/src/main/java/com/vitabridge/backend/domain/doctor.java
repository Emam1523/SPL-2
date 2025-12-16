package com.vitabridge.backend.domain;

import jakarta.persistence.*;
import lombok.*;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Doctor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "uid", nullable = false, unique = true)
    private AppUser appUser;

    @Column(nullable = false)
    private String firstName;
    @Column(nullable = false)
    private String lastName;
    @Column(nullable = false)
    private String specialization;
    @Column(nullable = false)
    private String email;
    @Column(nullable = false)
    private String licenseNumber;

    @OneToMany(mappedBy = "doctor", cascade = CascadeType.ALL)
    @ToString.Exclude
    private List<Assistant> assistants;

    public Doctor(AppUser appUser, String firstName, String lastName, String specialization, String email, String licenseNumber) {
        this.appUser = appUser;
        this.firstName = firstName;
        this.lastName = lastName;
        this.specialization = specialization;
        this.email = email;
        this.licenseNumber = licenseNumber;
    }
}
