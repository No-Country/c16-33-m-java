package com.application.ecommerce.repository;

import com.application.ecommerce.entities.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.math.BigDecimal;

public interface CartRepository extends JpaRepository<Cart, Long> {

    //buscar carrito por id_orden
    @Query("SELECT c FROM Cart c WHERE c.order.id = :idOrder")
    public Cart findCartByIdOrder(@Param("idOrder") Long id_order);

    //buscar carrito por precio total
    @Query("SELECT c FROM Cart c WHERE c.total = :total")
    public Cart findCartByTotal(@Param("total") BigDecimal total);
}
