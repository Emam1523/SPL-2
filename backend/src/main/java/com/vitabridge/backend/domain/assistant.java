package com.vitabridge.backend.domain;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Assistant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "uid", nullable = false, unique = true)
    private AppUser appUser;

    @ManyToOne
    @JoinColumn(name = "did", nullable = false)
    @ToString.Exclude
    private Doctor doctor;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String firstName;
    @Column(nullable = false)
    private String lastName;

    public Assistant(AppUser appUser, Doctor doctor, String email, String firstName, String lastName) {
        this.appUser = appUser;
        this.doctor = doctor;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
