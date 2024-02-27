package com.application.ecommerce.service;

import com.application.ecommerce.entities.Cart;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

public interface ICartService {

    // encontrar todos los carritos
    List<Cart> findAll();

    // encontrar un carrito por su id
    Optional<Cart> findById(Long id);

    // encontrar un carrito por id orden
    Optional<Cart> findCartByIdOrder(Long idOrder);

    // encontrar carrito con un total venta especifico
    Optional<Cart> findCartByTotal(BigDecimal total);

    // guardar un nuevo carrito
    Cart saveCart(Cart cart);

    // eliminar carrito
    void deleteCartById(Long id);
}
