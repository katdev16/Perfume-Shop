package com.Ecom.Server.Controller;

import com.Ecom.Server.Model.Cart;
import com.Ecom.Server.Service.CartService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cart")
public class CartController {
    private final CartService cartService;

    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    @PostMapping("/create")
    public Cart createCart() {
        return cartService.createCart();
    }

  
    @PostMapping("/{cartId}/add/{productId}")
    public Cart addToCart(@PathVariable int cartId, @PathVariable int productId) {
        return cartService.addToCart(cartId, productId);
    }


    @GetMapping("/{cartId}")
    public Cart getCart(@PathVariable int cartId) {
        return cartService.getCartById(cartId);
    }
}
