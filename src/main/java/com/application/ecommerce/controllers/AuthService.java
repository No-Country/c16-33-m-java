package com.application.ecommerce.controllers;

import com.application.ecommerce.controllers.dto.AuthResponse;
import com.application.ecommerce.controllers.dto.LoginRequest;
import com.application.ecommerce.controllers.dto.RegisterRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class AuthService {
    public AuthResponse login(LoginRequest request) {
        return null;
    }

    public AuthResponse register(RegisterRequest request) {
        return null;
    }
}
