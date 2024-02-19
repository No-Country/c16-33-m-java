package com.application.ecommerce.persistence.impl;

import com.application.ecommerce.entities.Order;
import com.application.ecommerce.persistence.IOrderDAO;
import com.application.ecommerce.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class OrderDAOImpl implements IOrderDAO {

    @Autowired
    private OrderRepository orderRepository;

    //encontrar todas las ordenes
    @Override
    public Optional<List<Order>> findAll() {
        return Optional.of(orderRepository.findAll());
    }

    //encontrar orden por su id
    @Override
    public Optional<Order> findById(Long id) {
        return orderRepository.findById(id);
    }

    //encontrar orden/ordenes por su estatus
    @Override
    public Optional<List<Order>> findByStatus(String status) {
        return Optional.ofNullable((List<Order>) orderRepository.findOrderByStatus(status));
    }

    //encontrar orden/ordenes por el id del cliente
    @Override
    public Order findByIdCustomer(Long idCustomer) {
        return orderRepository.findOrderByIdCustomer(idCustomer);
    }
    //guardar una nueva orden
    @Override
    public Order saveOrder(Order order) {
        return orderRepository.save(order);
    }

    //eliminar orden
    @Override
    public void deleteOrderById(Long id) {
        orderRepository.deleteById(id);
    }
}