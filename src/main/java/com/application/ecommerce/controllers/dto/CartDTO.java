package com.application.ecommerce.controllers.dto;

import com.application.ecommerce.entities.Product;
import lombok.*;

import java.math.BigDecimal;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CartDTO {

    private Long id;
    private Long idOrder;
    private List<Product> productList;
    private int quantity;
    private BigDecimal total;

}