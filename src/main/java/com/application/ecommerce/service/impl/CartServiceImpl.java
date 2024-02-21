package com.application.ecommerce.service.impl;

import com.application.ecommerce.entities.Cart;
import com.application.ecommerce.repository.CartRepository;
import com.application.ecommerce.service.ICartService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CartServiceImpl implements ICartService {
    private final CartRepository cartRepository;

    @Override
    public List<Cart> findAll() {
        return cartRepository.findAll();
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