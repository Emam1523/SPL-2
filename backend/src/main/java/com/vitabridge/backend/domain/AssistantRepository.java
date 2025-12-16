package com.vitabridge.backend.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface AssistantRepository extends JpaRepository<Assistant, Long> {
    Optional<Assistant> findByAppUser_Id(Long uid);
}