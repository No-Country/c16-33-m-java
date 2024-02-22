package com.application.ecommerce.service.impl;

import com.application.ecommerce.entities.Cart;
import com.application.ecommerce.persistence.ICartDAO;
import com.application.ecommerce.service.ICartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Service
public class CartServiceImpl implements ICartService {

    @Autowired
    private ICartDAO cartDAO;

    @Override
    public List<Cart> findAll() {
        return cartDAO.findAll();
    }

    @Override
    public Optional<Cart> findById(Long id) {
        return cartDAO.findById(id);
    }

    @Override
    public Optional<Cart> findCartByIdOrder(Long idOrder) {
        return cartDAO.findCartByIdOrder(idOrder);
    }

    @Override
    public Optional<Cart> findCartByTotal(BigDecimal total) {
        return cartDAO.findCartByTotal(total);
    }

    @Override
    public Cart saveCart(Cart cart) {
        return cartDAO.saveCart(cart);
    }

    @Override
    public void deleteCartById(Long id) {
        cartDAO.deleteCartById(id);
    }
}
