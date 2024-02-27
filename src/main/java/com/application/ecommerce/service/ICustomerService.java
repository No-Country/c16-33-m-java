package com.application.ecommerce.service;

import com.application.ecommerce.entities.Customer;

import java.util.List;
import java.util.Optional;

public interface ICustomerService {

    List<Customer> findAll();

    Optional<Customer> findById(Long id);

    void save(Customer customer);

    void deleteById(Long id);
}
