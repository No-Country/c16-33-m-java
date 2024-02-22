package com.application.ecommerce.controllers.dto;

import com.application.ecommerce.entities.Product;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CartDTO {
    private Product product;
    private int quantity;
    private BigDecimal unitPrice;
    private BigDecimal total;
}
