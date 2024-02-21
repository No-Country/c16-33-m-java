package com.application.ecommerce.service;

import com.application.ecommerce.entities.Cart;

import java.util.List;
import java.util.Optional;

public interface ICartService {

    List<Cart> findAll();

    Optional<Cart> findById(Long id);

    void save (Cart cart);

    void deleteById(Long id);
}