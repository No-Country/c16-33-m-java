package com.application.ecommerce.service.impl;

import com.application.ecommerce.entities.Cart;
<<<<<<< HEAD
=======
import com.application.ecommerce.models.CartPK;
import com.application.ecommerce.models.GetCartProductsResponse;
import com.application.ecommerce.models.ProductWithCartDetails;
>>>>>>> 041dd2b88d9ee84086039e997c99d51d657d59f3
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
<<<<<<< HEAD

    @Override
    public List<Cart> findAll() {
        return cartDAO.findAll();
    }

    @Override
    public Optional<Cart> findById(Long id) {
=======
    @Override
    public GetCartProductsResponse findAll(Long customerId) {
        List<ProductWithCartDetails> products = cartDAO.getAllProducts(customerId);

        BigDecimal total = products.stream()
                .map(ProductWithCartDetails::getPrice)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        return new GetCartProductsResponse(products, total);
    }

    @Override
    public Optional<Cart> findById(CartPK id) {
>>>>>>> 041dd2b88d9ee84086039e997c99d51d657d59f3
        return cartDAO.findById(id);
    }

    @Override
<<<<<<< HEAD
    public Optional<Cart> findCartByIdOrder(Long idOrder) {
        return cartDAO.findCartByIdOrder(idOrder);
    }

    @Override
    public Optional<Cart> findCartByTotal(BigDecimal total) {
        return cartDAO.findCartByTotal(total);
    }

    @Override
    public Cart saveCart(Cart cart) {
=======
    public Cart saveCart(Cart cart) {
        cart.setCartPK(new CartPK(cart.getCustomer().getId(), cart.getProduct().getId()));
>>>>>>> 041dd2b88d9ee84086039e997c99d51d657d59f3
        return cartDAO.saveCart(cart);
    }

    @Override
<<<<<<< HEAD
    public void deleteCartById(Long id) {
=======
    public void deleteCartById(CartPK id) {
>>>>>>> 041dd2b88d9ee84086039e997c99d51d657d59f3
        cartDAO.deleteCartById(id);
    }
}
