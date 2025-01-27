package com.Ecom.Server.Repo;

import com.Ecom.Server.Model.Product;
import org.springframework.data.repository.CrudRepository;


public interface ProductsRepository extends CrudRepository<Product, Integer> {}
