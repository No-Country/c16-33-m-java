package com.application.ecommerce.models;

import com.application.ecommerce.entities.Product;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductWithCartDetails extends Product {
    private int quantity;
}
