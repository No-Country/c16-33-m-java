package com.application.ecommerce.controllers;

<<<<<<< HEAD
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
=======
import com.application.ecommerce.controllers.dto.AuthResponse;
import com.application.ecommerce.controllers.dto.LoginRequest;
import com.application.ecommerce.controllers.dto.RegisterRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
>>>>>>> feature_login2
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

<<<<<<< HEAD
    @PostMapping(value = "login")
    public String login(){
        return "Estamos en el login";
    }

    @PostMapping(value = "register")
    public String register(){
        return "Estamos en el regristro";
=======
    private final AuthService authService;

    @PostMapping(value = "login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest request)
    {
        return ResponseEntity.ok(authService.login(request));
    }

    @PostMapping(value = "register")
    public ResponseEntity <AuthResponse> register(@RequestBody RegisterRequest request)
    {
        return ResponseEntity.ok(authService.register(request));
>>>>>>> feature_login2
    }
}