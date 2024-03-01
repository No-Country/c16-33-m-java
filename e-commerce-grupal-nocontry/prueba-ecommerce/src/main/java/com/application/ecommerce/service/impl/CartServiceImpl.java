package com.application.ecommerce.service.impl;

import com.application.ecommerce.entities.Cart;
import com.application.ecommerce.models.CartPK;
import com.application.ecommerce.models.GetCartProductsResponse;
import com.application.ecommerce.models.ProductWithCartDetails;
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
    public GetCartProductsResponse findAll(Long customerId) {
        List<ProductWithCartDetails> products = cartDAO.getAllProducts(customerId);

        BigDecimal total = products.stream()
                .map(ProductWithCartDetails::getPrice)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        return new GetCartProductsResponse(products, total);
    }

    @Override
    public Optional<Cart> findById(CartPK id) {
        return cartDAO.findById(id);
    }

    @Override
    public Cart saveCart(Cart cart) {
        cart.setCartPK(new CartPK(cart.getCustomer().getId(), cart.getProduct().getId()));
        return cartDAO.saveCart(cart);
    }

    @Override
    public void deleteCartById(CartPK id) {
        cartDAO.deleteCartById(id);
    }
}
