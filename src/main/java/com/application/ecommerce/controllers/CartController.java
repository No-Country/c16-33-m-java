package com.application.ecommerce.controllers;

import com.application.ecommerce.controllers.dto.CartDTO;
import com.application.ecommerce.controllers.dto.ProductDTO;
import com.application.ecommerce.entities.Cart;
import com.application.ecommerce.entities.Order;
import com.application.ecommerce.entities.Product;
import com.application.ecommerce.service.ICartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/cart")
public class CartController {

    private static final int List = 0;
    @Autowired
    private ICartService cartService;

    @GetMapping("/find/{id}")
    public ResponseEntity<?> findById(@PathVariable Long id) {
        Optional<Cart> cartOptional = cartService.findById(id);

        if (cartOptional.isPresent()) {
            Cart cart = cartOptional.get();
            CartDTO cartDTO = CartDTO.builder()
                    .id(cart.getId())
                    .idOrder(cart.getOrder().getId())
                    .productList(cart.getProductList())
                    .quantity(cart.getQuantity())
                    .total(cart.getTotal())
                    .build();
            return ResponseEntity.ok(cartDTO);
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/findAll")
    public ResponseEntity<List<CartDTO>> findAll() {
        List<CartDTO> cartList = List < CartDTO > cartService.findAll()
                .stream()
                .map(cart -> CartDTO.builder()
                        .id(cart.getId())
                        .idOrder(cart.getOrder().getId())
                        .productList(cart.getProductList()) // <-- Esto podría necesitar ser corregido según tu modelo
                                                            // de datos
                        .quantity(cart.getQuantity())
                        .total(cart.getTotal())
                        .build());
        // <- Esta línea no es necesaria
        return ResponseEntity.ok(cartList);
    }

    @PostMapping("/save")
    public ResponseEntity<?> save(@RequestBody CartDTO cartDTO) throws URISyntaxException {
        if (cartDTO == null || cartDTO.getIdOrder() == null || cartDTO.getProductList() == null ||
                cartDTO.getQuantity() <= 0 || cartDTO.getTotal() == null) {
            return ResponseEntity.badRequest().build();
        }

        try {
            Cart cart = Cart.builder()
                    .order(new Order()) // Asumo que Order tiene un constructor que toma el id
                    .productList(cartDTO.getProductList()) // <-- Esto podría necesitar ser corregido según tu modelo de
                                                           // datos
                    .quantity(cartDTO.getQuantity())
                    .total(cartDTO.getTotal())
                    .build();
            cartService.save(cart);
            return ResponseEntity.created(new URI("/api/cart/save")).build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteById(@PathVariable Long id) {
        if (id != null) {
            cartService.deleteById(id);
            return ResponseEntity.ok("Producto Eliminado");
        }

        return ResponseEntity.badRequest().build();
    }

}