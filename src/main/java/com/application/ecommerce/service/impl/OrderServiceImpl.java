package com.application.ecommerce.service.impl;

import com.application.ecommerce.entities.Order;
import com.application.ecommerce.persistence.IOrderDAO;
import com.application.ecommerce.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderServiceImpl implements IOrderService {

    @Autowired
    private IOrderDAO orderDAO;

    //encontrar todas las ordenes
    @Override
    public Optional<List<Order>> findAll() {
        return orderDAO.findAll();
    }

    //encontrar orden por su id
    @Override
    public Optional<Order> findById(Long id) {
        return orderDAO.findById(id);
    }

    //encontrar orden/ordenes por su estatus
    @Override
    public Optional<List<Order>> findByStatus(String status) {
        return orderDAO.findByStatus(status);
    }

    @Override
    public List<Order> findByIdCustomer(Long idCustomer) {
        return (List<Order>) orderDAO.findByIdCustomer(idCustomer);
    }

    //guardar una nueva orden
    @Override
    public Order saveOrder(Order order) {
        return orderDAO.saveOrder(order);
    }

    //eliminar orden
    @Override
    public void deleteOrderById(Long id) {
        orderDAO.deleteOrderById(id);
    }
}