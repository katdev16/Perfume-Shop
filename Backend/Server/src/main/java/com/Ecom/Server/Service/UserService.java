package com.Ecom.Server.Service;


import com.Ecom.Server.Model.Cart;
import com.Ecom.Server.Model.User;
import com.Ecom.Server.Repo.UserRepository;
import com.Ecom.Server.Repo.CartRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    private final CartService cartService;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder; // ✅ Use the injected bean

    public User registerUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));  // Hash password
        return userRepository.save(user);
    }

    public UserService(CartService cartService) {
        this.cartService = cartService;
    }


    public User getUserById(int id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));


        User user1 = new User();
        user1.setId(user.getId());
        user1.setName(user.getName());
        user1.setEmail(user.getEmail());



        return user1;
    }


    public List<User> getAllUsers() {
        List<User> users = userRepository.findAll();

        return users.stream().map(user -> {
            User user1 = new User();
            user1.setId(user.getId());
            user1.setName(user.getName());
            user1.setEmail(user.getEmail());
            user1.setPassword(user.getPassword());





            return user1;
        }).collect(Collectors.toList());
    }



    public User createUser(User user) {
//        // Hash the password before saving the user
//        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        Cart cart = new Cart();
        cartService.createCart();



        User savedUser = userRepository.save(user);

        // Map the saved user to a UserDTO
        User user1 = new User();
        user1.setId(savedUser.getId());
        user1.setName(savedUser.getName());
        user1.setEmail(savedUser.getEmail());
        user1.setPassword(savedUser.getPassword());
//        userDTO.setPoints(savedUser.);


        return user1;
    }

    public User updateUser(int id, User updatedUser) {
        User existingUser = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));

        existingUser.setName(updatedUser.getName());
        existingUser.setEmail(updatedUser.getEmail());

        if (updatedUser.getPassword() != null && !updatedUser.getPassword().isEmpty()) {
            existingUser.setPassword(passwordEncoder.encode(updatedUser.getPassword()));
        }

        User updated = userRepository.save(existingUser);

        User user1 = new User();
        user1.setId(updated.getId());
        user1.setName(updated.getName());
        user1.setEmail(updated.getEmail());

        return user1;
    }

    public boolean verifyPassword(String rawPassword, String encodedPassword) {
        return passwordEncoder.matches(rawPassword, encodedPassword);
    }


    public String deleteUserById(int id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));

        userRepository.delete(user);

        return "User deleted successfully";
    }


    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }



}
