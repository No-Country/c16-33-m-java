package com.application.ecommerce.service.impl;

import com.application.ecommerce.entities.Customer;
import com.application.ecommerce.persistence.ICustomerDAO;
import com.application.ecommerce.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerServiceImpl implements ICustomerService {

    @Autowired
    private ICustomerDAO customerDAO;

    @Override
    public List<Customer> findAll() {
        return customerDAO.findAll();
    }

    @Override
    public Optional<Customer> findById(Long id) {
        return customerDAO.findById(id);
    }

    @Override
    public void save(Customer customer) {
        customerDAO.save(customer);
    }

    @Override
    public void deleteById(Long id) {
        customerDAO.deleteById(id);
    }
}
