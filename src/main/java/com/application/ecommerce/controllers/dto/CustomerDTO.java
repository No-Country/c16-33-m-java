package com.application.ecommerce.controllers.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.query.Order;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CustomerDTO {

    private Long id;
    private String name;
    private String lastName;
    private String cellPhone;
    private String email;
    private Data birthday;
    private List<Order> orderList = new ArrayList<>();

}
