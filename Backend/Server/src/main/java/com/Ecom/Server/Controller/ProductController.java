package com.Ecom.Server.Controller;

import com.Ecom.Server.Model.Product;
import com.Ecom.Server.Repo.ProductsRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

    @RestController
    public class ProductController {
        private final ProductsRepository productsRepository;

        public ProductController(ProductsRepository productsRepository) {
            this.productsRepository = productsRepository;
        }

        @PostMapping("/product")
        public Product createNewProduct(@RequestBody Product product) {
            return this.productsRepository.save(product);
        }

        @GetMapping("/product")
        public Iterable<Product> getAllProduct() {
            return this.productsRepository.findAll();
        }
    }


