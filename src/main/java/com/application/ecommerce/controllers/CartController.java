package com.application.ecommerce.controllers;

import com.application.ecommerce.controllers.dto.CartDTO;
import com.application.ecommerce.entities.Cart;
import com.application.ecommerce.entities.Customer;
import com.application.ecommerce.entities.Order;
import com.application.ecommerce.service.ICartService;
import com.application.ecommerce.service.ICustomerService;
import com.application.ecommerce.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;
import java.util.Optional;

@Controller
@RequestMapping("/api/cart")
public class CartController {

    @Autowired
    private ICartService cartService;
    @Autowired
    private IOrderService orderService;
    @Autowired
    private ICustomerService customerService;

    //buscar carrito con id
    @GetMapping("/{id}")
    public ResponseEntity<String> findCartById(@PathVariable("id") Long id) {
        Optional<Cart> cartOptional = cartService.findById(id);
        if(cartOptional.isPresent()) {
            Cart foundCart = cartOptional.get();
            if (foundCart.getId().equals(id)) {
                return new ResponseEntity<>("Carrito encontrado", HttpStatus.OK);
            }
        }
        return new ResponseEntity<>("Carrito no encontrado", HttpStatus.NOT_FOUND);
    }

    //crear un nuevo carrito y guardarlo
    @PostMapping("/")
    public ResponseEntity<Object> saveCart(@RequestBody CartDTO cartDTO, @RequestParam Long customerId) {

        if (Objects.isNull(cartDTO) || Objects.isNull(cartDTO.getQuantity()) || Objects.isNull(cartDTO.getTotal()) || Objects.isNull(cartDTO.getUnitPrice()) || Objects.isNull(cartDTO.getProduct())) {
            return new ResponseEntity<>("Request body incompleto", HttpStatus.BAD_REQUEST);
        }

        Optional<Customer> customerOptional = customerService.findById(customerId);
        if (customerOptional.isEmpty()) {
            return new ResponseEntity<>("Cliente no encontrado", HttpStatus.NOT_FOUND);
        }

        Customer customer = customerOptional.get();

        Order order = new Order();
        order.setCustomer(customer);
        order.setStatus("pending");
        orderService.saveOrder(order);

        Cart cart = new Cart();
        cart.setOrder(order);
        cart.setProduct(cartDTO.getProduct());
        cart.setQuantity(cartDTO.getQuantity());
        cart.setUnitPrice(cartDTO.getUnitPrice());
        cart.setTotal(cartDTO.getTotal());

        Cart savedCart = cartService.saveCart(cart);

        return ResponseEntity.ok(savedCart);
    }

    //borrar un carrito
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteCart(@PathVariable("id") Long id) {
        if (Objects.nonNull(id)) {
            cartService.deleteCartById(id);
            return new ResponseEntity<>("Carrito cancelado", HttpStatus.OK);
        }
        return new ResponseEntity<>("No se pudo borrar el carrito", HttpStatus.NO_CONTENT);
    }
}
