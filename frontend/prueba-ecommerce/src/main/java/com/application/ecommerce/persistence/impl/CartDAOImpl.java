package com.application.ecommerce.persistence.impl;

import com.application.ecommerce.entities.Cart;
import com.application.ecommerce.entities.Product;
import com.application.ecommerce.models.CartPK;
import com.application.ecommerce.models.ProductWithCartDetails;
import com.application.ecommerce.persistence.ICartDAO;
import com.application.ecommerce.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
public class CartDAOImpl implements ICartDAO {

    @Autowired
    private CartRepository cartRepository;
    @Override
    public List<Cart> findAll() {
        return cartRepository.findAll();
    }

    @Override
    public Optional<Cart> findById(CartPK id) {
        return cartRepository.findById(id);
    }

    @Override
    public Cart saveCart(Cart cart) {
        return cartRepository.save(cart);
    }

    @Override
    public void deleteCartById(CartPK id) {
        cartRepository.deleteById(id);
    }

    @Override
    public List<ProductWithCartDetails> getAllProducts(Long customerId) {
        List<Cart> products = cartRepository.findByCustomerId(customerId);
        return products.stream()
                .map(cart -> {
                    Product product = cart.getProduct();
                    ProductWithCartDetails productWithCartDetails = new ProductWithCartDetails();
                    productWithCartDetails.setId(product.getId());
                    productWithCartDetails.setName(product.getName());
                    productWithCartDetails.setPrice(product.getPrice());
                    productWithCartDetails.setCategory(product.getCategory());
                    productWithCartDetails.setQuantity(cart.getQuantity());
                    return productWithCartDetails;
                })
                .collect(Collectors.toList());
    }
}
