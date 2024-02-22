package com.application.ecommerce.persistence.impl;

import com.application.ecommerce.entities.Cart;
import com.application.ecommerce.persistence.ICartDAO;
import com.application.ecommerce.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Component
public class CartDAOImpl implements ICartDAO {

    @Autowired
    private CartRepository cartRepository;
    @Override
    public List<Cart> findAll() {
        return cartRepository.findAll();
    }

    @Override
    public Optional<Cart> findById(Long id) {
        return cartRepository.findById(id);
    }

    @Override
    public Optional<Cart> findCartByIdOrder(Long idOrder) {
        return Optional.ofNullable(cartRepository.findCartByIdOrder(idOrder));
    }

    @Override
    public Optional<Cart> findCartByTotal(BigDecimal total) {
        return Optional.ofNullable(cartRepository.findCartByTotal(total));
    }

    @Override
    public Cart saveCart(Cart cart) {
        return cartRepository.save(cart);
    }

    @Override
    public void deleteCartById(Long id) {
        cartRepository.deleteById(id);
    }
}
