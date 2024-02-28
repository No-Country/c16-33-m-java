package com.application.ecommerce.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GetCartProductsResponse {
    private List<ProductWithCartDetails> products;
    private BigDecimal total;
}
