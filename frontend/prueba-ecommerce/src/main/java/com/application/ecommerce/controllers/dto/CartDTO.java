package com.application.ecommerce.controllers.dto;

import com.application.ecommerce.entities.Product;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CartDTO {
    private Long productId;
    private int quantity;
    private BigDecimal unitPrice;
    private BigDecimal total;
}
