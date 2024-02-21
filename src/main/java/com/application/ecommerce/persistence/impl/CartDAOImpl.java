package com.application.ecommerce.persistence.impl;

import com.application.ecommerce.entities.Cart;
import com.application.ecommerce.persistence.ICartDAO;
import com.application.ecommerce.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

public class CartDAOImpl implements ICartDAO {

    // Inyeccion de las dependencias.

    @Autowired
    private CartRepository cartRepository;

    @Override
    public List<Cart> findAll() {
        return (List<Cart>) cartRepository.findAll();
    }

    @SuppressWarnings("null")
    @Override
    public Optional<Cart> findById(Long id) {
        return cartRepository.findById(id);
    }

    @SuppressWarnings("null")
    @Override
    public void save(Cart cart) {
        cartRepository.save(cart);
    }

    @SuppressWarnings("null")
    @Override
    public void deleteById(Long id) {
        cartRepository.deleteById(id);
    }

}