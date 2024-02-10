package com.application.ecommerce.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import org.hibernate.annotations.UuidGenerator;

import java.util.UUID;

@Entity
public class Cliente {
    @Id
    @UuidGenerator
    private UUID idCliente;

    @Column(nullable = false)
    private String nombre;
    @Column(nullable = false)

    private String apellido;
    private Long celular;

    @Column(unique = true)
    private String email;


    public Cliente() {
    }

    public Cliente(String nombre, String apellido, Long celular, String email) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.celular = celular;
        this.email = email;
    }

    public UUID getIdCliente() {
        return idCliente;
    }

    public void setIdCliente(UUID id) {
        this.idCliente = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public Long getCelular() {
        return celular;
    }

    public void setCelular(Long celular) {
        this.celular = celular;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
