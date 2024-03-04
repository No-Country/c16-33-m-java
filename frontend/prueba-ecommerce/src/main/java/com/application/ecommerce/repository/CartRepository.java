package com.application.ecommerce.repository;

import com.application.ecommerce.entities.Cart;
import com.application.ecommerce.models.CartPK;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.math.BigDecimal;
import java.util.List;

public interface CartRepository extends JpaRepository<Cart, CartPK> {
    List<Cart> findByCustomerId(Long customerId);
}
