package com.application.ecommerce.controllers;

import com.application.ecommerce.controllers.dto.CartDTO;
import com.application.ecommerce.entities.Cart;
import com.application.ecommerce.entities.Customer;
import com.application.ecommerce.entities.Order;
import com.application.ecommerce.entities.Product;
import com.application.ecommerce.models.AddProductToCartRequest;
import com.application.ecommerce.models.CartPK;
import com.application.ecommerce.models.GetCartProductsResponse;
import com.application.ecommerce.service.ICartService;
import com.application.ecommerce.service.ICustomerService;
import com.application.ecommerce.service.IOrderService;
import com.application.ecommerce.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;
import java.util.Optional;

@CrossOrigin(origins = "*")
@Controller
@RequestMapping("/api/cart")
public class CartController {

    @Autowired
    private ICartService cartService;
    @Autowired
    private IOrderService orderService;
    @Autowired
    private ICustomerService customerService;
    @Autowired
    private IProductService productService;

    //buscar carrito con id
    @GetMapping("/{id}")
    public ResponseEntity<GetCartProductsResponse> findCartProductsByCustomerId(@PathVariable("id") Long id) {
        return ResponseEntity.ok(cartService.findAll(id));
    }

    //agregar producto al carrito
    @PostMapping("/")
    public ResponseEntity<Object> addingProductToCart(@RequestBody AddProductToCartRequest request, @RequestParam Long customerId) {
        if (Objects.isNull(request.getProductId()) || Objects.isNull(request.getQuantity())) {
            return new ResponseEntity<>("Request invalida", HttpStatus.BAD_REQUEST);
        }

        Optional<Customer> customerOptional = customerService.findById(customerId);
        if (customerOptional.isEmpty()) {
            return new ResponseEntity<>("Costumer not valid", HttpStatus.NOT_FOUND);
        }

        Cart cart = cartService.saveCart(Cart
                .builder()
                .customer(Customer
                        .builder()
                        .id(customerOptional.get().getId())
                        .build())
                .product(Product
                        .builder()
                        .id(request.getProductId())
                        .build())
                .quantity(request.getQuantity())
                .build());
        return ResponseEntity.ok(cart);
    }

    //guardar carrito (en proceso de coding)
    //@PostMapping("/")
    public ResponseEntity<Object> saveCart(@RequestBody CartDTO cartDTO, @RequestParam Long customerId) {

        if (Objects.isNull(cartDTO) || Objects.isNull(cartDTO.getQuantity()) || Objects.isNull(cartDTO.getTotal()) ||
                Objects.isNull(cartDTO.getUnitPrice())) {
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
        //cart.setOrder(order);
        cart.setQuantity(cartDTO.getQuantity());
        //cart.setTotal(cartDTO.getTotal());

        Cart savedCart = cartService.saveCart(cart);

        return ResponseEntity.ok(savedCart);
    }

    //borrar un carrito
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteCart(@PathVariable("id") CartPK id) {
        if (Objects.nonNull(id)) {
            cartService.deleteCartById(id);
            return new ResponseEntity<>("Carrito cancelado", HttpStatus.OK);
        }
        return new ResponseEntity<>("No se pudo borrar el carrito", HttpStatus.NO_CONTENT);
    }
}
