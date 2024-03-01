package com.application.ecommerce.models;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Embeddable
public class CartPK implements Serializable {
    @Column(name = "id_cliente")
    private Long customerId;

    @Column(name = "id_producto")
    private Long productId;
}
