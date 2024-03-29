package com.application.ecommerce.controllers;


import com.application.ecommerce.controllers.dto.CategoryDTO;
import com.application.ecommerce.entities.Category;
import com.application.ecommerce.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/category")
public class CategoryController {

    @Autowired
    private ICategoryService categoryService;

    @GetMapping("/find/{id}")
    public ResponseEntity<?> findById(@PathVariable Long id){
        Optional<Category> categoryOptional = categoryService.findById(id);

        if(categoryOptional.isPresent()){
            Category category = categoryOptional.get();
            CategoryDTO categoryDTO = CategoryDTO.builder()
                    .id(category.getId())
                    .name(category.getName())
                    .productList(category.getProductList())
                    .build();
            return  ResponseEntity.ok(categoryDTO);
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/findAll")
    public ResponseEntity<?> findAll(){
        List<CategoryDTO> categoryList = categoryService.findAll()
                .stream()
                .map(category -> CategoryDTO.builder()
                        .id(category.getId())
                        .name(category.getName())
                        .productList(category.getProductList())
                        .build())
                .toList();
        return ResponseEntity.ok(categoryList);
    }

    @PostMapping("/save")
    public ResponseEntity<?> save(@RequestBody CategoryDTO categoryDTO) throws URISyntaxException {
        if (categoryDTO.getName().isBlank()){
            return ResponseEntity.badRequest().build();
        }
        categoryService.save(Category.builder()
                .name(categoryDTO.getName())
                .build());
        return ResponseEntity.created(new URI("/api/category/save")).build();
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateCategory(@PathVariable Long id, @RequestBody CategoryDTO categoryDTO){
        Optional<Category> categoryOptional = categoryService.findById(id);

        if(categoryOptional.isPresent()){
            Category category = categoryOptional.get();
            category.setName(categoryDTO.getName());
            categoryService.save(category);
            return ResponseEntity.ok("Registro Actualizado");

        }
        return ResponseEntity.notFound().build();
    }


    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteById(@PathVariable Long id){

        if(id !=null){
            categoryService.deleteById(id);
            return ResponseEntity.ok("Registro Eliminado");
        }
        return ResponseEntity.badRequest().build();
    }

}
