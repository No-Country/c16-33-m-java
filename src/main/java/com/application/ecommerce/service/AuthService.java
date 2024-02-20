package com.application.ecommerce.service;

import com.application.ecommerce.controllers.dto.AuthResponse;
import com.application.ecommerce.controllers.dto.LoginRequest;
import com.application.ecommerce.controllers.dto.RegisterRequest;
import com.application.ecommerce.entities.Role;
import com.application.ecommerce.entities.User;
import com.application.ecommerce.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final JwtService jwtService;
    public AuthResponse login(LoginRequest request) {
        return null;
    }

    public AuthResponse register(RegisterRequest request) {
        User user = User.builder()
                .username(request.getUsername())
                .password(request.getPassword())
                .role(Role.USER)
                .build();

        userRepository.save(user);

        return AuthResponse.builder()
                .token(jwtService.getToken(user))
                .build();
    }


}
