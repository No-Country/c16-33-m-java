package com.application.ecommerce.persistence.impl;

import com.application.ecommerce.entities.Category;
import com.application.ecommerce.persistence.ICategoryDAO;
import com.application.ecommerce.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class CategoryDAOImpl implements ICategoryDAO {

    // Inyeciòn de dependencias
    @Autowired
    private CategoryRepository categoryRepository;


    @Override
    public List<Category> findAll() {

        return (List<Category>) categoryRepository.findAll();
    }

    @Override
    public Optional<Category> findById(Long id) {

        return categoryRepository.findById(id);
    }

    @Override
    public void save(Category category) {
        categoryRepository.save(category);

    }

    @Override
    public void deleteById(Long id) {

        categoryRepository.deleteById(id);

    }
}
