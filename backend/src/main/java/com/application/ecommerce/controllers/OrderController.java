package com.application.ecommerce.controllers;

import com.application.ecommerce.controllers.dto.OrderDTO;
import com.application.ecommerce.entities.Order;
import com.application.ecommerce.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


import java.util.Objects;
import java.util.Optional;


@Controller
@RequestMapping("/api/order")
public class OrderController {

    @Autowired
    private IOrderService orderService;

    //buscar una orden con id
    @GetMapping("/{id}")
    public ResponseEntity<String> findOrderById(@PathVariable("id") Long id) {
        Optional<Order> orderOptional = orderService.findById(id);
        if (orderOptional.isPresent()) {
            Order foundOrder = orderOptional.get();
            if (foundOrder.getId().equals(id)) {
                return new ResponseEntity<>("Orden encontrada", HttpStatus.OK);
            }
        }
        return new ResponseEntity<>("Orden no encontrada o nula", HttpStatus.NOT_FOUND);
    }


    //crear una nueva orden y guardarla
    @PostMapping("/")
    public ResponseEntity<Object> saveOrder(@RequestBody OrderDTO order) {

        if(Objects.isNull(order.getStatus()) || Objects.isNull(order.getId())) {
            return new ResponseEntity<Object>("Request body incompleto", HttpStatus.BAD_REQUEST);
        }

        return ResponseEntity.ok(
                orderService.saveOrder(Order
                    .builder()
                        .status(order.getStatus())
                        .id(order.getId())
                    .build())
                );
    }

    //borrar una orden
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteOrder(@PathVariable("id") Long id) {
        if (Objects.nonNull(id)) {
            orderService.deleteOrderById(id);
            return new ResponseEntity<String>("Orden cancelada", HttpStatus.OK);
        }
        return new ResponseEntity<String>("No se pudo borrar la orden", HttpStatus.NO_CONTENT);
    }
}

