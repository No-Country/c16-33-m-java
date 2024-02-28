package com.application.ecommerce.entities;

import com.application.ecommerce.models.CartPK;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "carrito")
public class Cart {

    @EmbeddedId
    private CartPK cartPK;

    @ManyToOne
    @MapsId("customerId")
    @JoinColumn(name = "id_cliente", referencedColumnName = "id")
    private Customer customer;

    @ManyToOne
    @MapsId("productId")
    @JoinColumn(name = "id_producto", referencedColumnName = "id")
    private Product product;

    @Column(name = "cantidad")
    private int quantity;

}
