
package com.Ecom.Server.Model;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "Carts")
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "cart_id") // Foreign key in Product table
    private List<Product> products = new ArrayList<>();

    // Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }

    // Add a product to the cart
    public void addProduct(Product product) {
        this.products.add(product);
    }

    // Remove a product from the cart
    public void removeProduct(Product product) {
        this.products.remove(product);
    }
}
