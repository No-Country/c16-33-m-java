package com.application.ecommerce.persistence;

import com.application.ecommerce.entities.Cart;
import com.application.ecommerce.models.CartPK;
import com.application.ecommerce.models.ProductWithCartDetails;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

public interface ICartDAO {

    //encontrar todos los carritos
    List<Cart> findAll();

    //encontrar un carrito por su id
    Optional<Cart> findById(CartPK id);

    //guardar un nuevo carrito
    Cart saveCart(Cart cart);

    //eliminar carrito
    void deleteCartById(CartPK id);

    List<ProductWithCartDetails> getAllProducts(Long customerId);
}
