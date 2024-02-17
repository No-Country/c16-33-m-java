package com.application.ecommerce.persistence;

import org.hibernate.query.Order;

import java.util.List;
import java.util.Optional;

public interface ICustomerDAO {
    List<Order> findAll();

    Optional<Order> findById(Long id);

    void save(ICustomerDAO customer);

    void deleteById(long id);
}
