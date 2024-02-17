package com.application.ecommerce.repository;

import com.application.ecommerce.entities.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface OrderRepository extends JpaRepository<Order, Long> {

    //buscar orden por status
    @Query("SELECT o FROM Order o WHERE o.status = :status")
    public Order findOrderByStatus(@Param("status") String status);

    //buscar orden por idCliente
    /*
    @Query("SELECT o FROM Order o WHERE o.idCostumer = :id_costumer")
    public Order findOrderByIdCostumer(@Param("idCostumer") Long id_costumer);
     */
}
