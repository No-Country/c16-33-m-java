package com.application.ecommerce.persistence;

import com.application.ecommerce.entities.Cart;

import java.util.List;
import java.util.Optional;

public interface ICartDAO {

    List<Cart> findAll();

    Optional<Cart> findById(Long id);

    void save(Cart cart);

    void deleteById(Long id);
}