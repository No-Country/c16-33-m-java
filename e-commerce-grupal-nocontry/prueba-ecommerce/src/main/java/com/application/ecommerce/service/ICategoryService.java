package com.application.ecommerce.service;

import com.application.ecommerce.entities.Category;

import java.util.List;
import java.util.Optional;

public interface ICategoryService {

    List<Category> findAll();

    Optional<Category> findById(Long id);

    void save(Category category);

    void deleteById(Long id);
}
