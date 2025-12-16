package com.vitabridge.backend.domain;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Patient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "uid", nullable = false, unique = true)
    private AppUser appUser;

    private String email;

    @Column(nullable = false)
    private String firstName;
    @Column(nullable = false)
    private String lastName;

    private Integer age;
    private String sex;
    private String address;
    private String emergencyContact;

    public Patient(AppUser appUser, String firstName, String lastName, String email,
                   Integer age, String sex, String address, String emergencyContact) {
        this.appUser = appUser;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.sex = sex;
        this.address = address;
        this.emergencyContact = emergencyContact;
    }
}
