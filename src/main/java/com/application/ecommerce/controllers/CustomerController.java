package com.application.ecommerce.controllers;

import com.application.ecommerce.controllers.dto.CustomerDTO;
import com.application.ecommerce.entities.Customer;
import com.application.ecommerce.service.ICustomerService;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/customer")
public class CustomerController {

    @Autowired
    private ICustomerService customerService;

    @GetMapping("/find/{id}")
    public ResponseEntity<?> findById(@PathVariable Long id) {
        Optional<Customer> customerOptional = customerService.findById(id);

        if (customerOptional.isPresent()){
            Customer customer = customerOptional.get();
            CustomerDTO customerDTO = CustomerDTO.builder()
                    .id(customer.getId())
                    .name(customer.getName())
                    .lastName(customer.getLastName())
                    .cellPhone(customer.getCellPhone())
                    .email(customer.getEmail())
                    .birthday((Date) customer.getBirthday())
                    .orderList(customer.getOrderList())
                    .build();
            return ResponseEntity.ok((customerDTO));
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/findAll")
    public ResponseEntity<?> findAll() {
        List<CustomerDTO> customerList = customerService.findAll()
                .stream()
                .map(customer -> CustomerDTO.builder()
                        .id(customer.getId())
                        .name(customer.getName())
                        .lastName(customer.getLastName())
                        .cellPhone(customer.getCellPhone())
                        .email(customer.getEmail())
                        .birthday((Date) customer.getBirthday())
                        .orderList(customer.getOrderList())
                        .build())
                .toList();
        return ResponseEntity.ok((customerList));
    }



    @PostMapping("/save")
    public ResponseEntity<?> save(@RequestBody CustomerDTO customerDTO) throws URISyntaxException {
        if (customerDTO.getName().isBlank() || customerDTO.getLastName().isBlank() ||
                customerDTO.getCellPhone().isBlank() || customerDTO.getEmail().isBlank() ||
                customerDTO.getBirthday() == null) {
            return ResponseEntity.badRequest().build();
        }

        Customer customer = Customer.builder()
                .name(customerDTO.getName())
                .lastName(customerDTO.getLastName())
                .cellPhone(customerDTO.getCellPhone())
                .email(customerDTO.getEmail())
                .birthday(customerDTO.getBirthday())
                .orderList(customerDTO.getOrderList())
                .build();
        customerService.save(customer);

        return ResponseEntity.created(new URI("/api/customer/save")).build();

    }

    // ELIMINA UN CLIENTE
    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable Long id, @RequestBody CustomerDTO customerDTO) {
        Optional<Customer> customerOptional = customerService.findById(id);

        if (customerOptional.isPresent()) {
            Customer customer = customerOptional.get();
            customer.setName(customerDTO.getName());
            customer.setLastName(customerDTO.getLastName());
            customer.setCellPhone(customerDTO.getCellPhone());
            customer.setEmail(customerDTO.getEmail());
            customer.setBirthday(customerDTO.getBirthday());
            customerService.save(customer);

            return ResponseEntity.ok("Registro Actualizado");
        }
        return ResponseEntity.notFound().build();
    }



    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteById(@PathVariable Long id) {

        if (id!=null){
            customerService.deleteById(id);
            return ResponseEntity.ok("Cliente Eliminado");
        }
        return ResponseEntity.badRequest().build();
    }


















}
