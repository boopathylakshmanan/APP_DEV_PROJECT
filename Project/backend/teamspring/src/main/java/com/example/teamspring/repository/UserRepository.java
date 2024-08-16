package com.example.teamspring.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.teamspring.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
}