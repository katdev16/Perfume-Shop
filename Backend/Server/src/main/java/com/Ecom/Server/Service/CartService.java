package com.Ecom.Server.Service;

import com.Ecom.Server.Model.Cart;
import com.Ecom.Server.Model.Product;
import com.Ecom.Server.Repo.CartRepository;
import com.Ecom.Server.Repo.ProductsRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CartService {
    private final CartRepository cartRepository;
    private final ProductsRepository productsRepository;

    public CartService(CartRepository cartRepository, ProductsRepository productsRepository) {
        this.cartRepository = cartRepository;
        this.productsRepository = productsRepository;
    }

    // Add a product to a cart
    public Cart addToCart(Long cartId, int productId) {
        // Retrieve the cart by ID
        Optional<Cart> cartOptional = cartRepository.findById(cartId);
        if (cartOptional.isEmpty()) {
            throw new RuntimeException("Cart not found with ID: " + cartId);
        }

        // Retrieve the product by ID
        Optional<Product> productOptional = productsRepository.findById(productId);
        if (productOptional.isEmpty()) {
            throw new RuntimeException("Product not found with ID: " + productId);
        }

        Cart cart = cartOptional.get();
        Product product = productOptional.get();

        // Add the product to the cart
        cart.addProduct(product);

        // Save the cart back to the database
        return cartRepository.save(cart);
    }

    // Get all products in the cart
    public Cart getCartById(Long cartId) {
        return cartRepository.findById(cartId)
                .orElseThrow(() -> new RuntimeException("Cart not found with ID: " + cartId));
    }
}
