package com.application.ecommerce.persistence;

import com.application.ecommerce.entities.Order;

import java.util.List;
import java.util.Optional;

public interface IOrderDAO {

    //encontrar todas las ordenes
    Optional<List<Order>> findAll();

    //encontrar orden por su id
    Optional<Order> findById(Long Id);

    //encontrar orden/ordenes por su estatus
    Optional<List<Order>> findByStatus(String status);

    //encontrar orden/ordenes por el id del cliente
    Order findByIdCustomer(Long idCustomer);

    //guardar una nueva orden
    Order saveOrder(Order order);

    //eliminar orden
    void deleteOrderById(Long Id);
}
