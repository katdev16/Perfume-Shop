package com.Ecom.Server.Controller;

import com.Ecom.Server.DTO.LoginRequest;
import com.Ecom.Server.Model.User;
import com.Ecom.Server.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;  // Add password encoder

    /**
     * Register a new user (Sign-up)
     */
    @PostMapping("/register")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        System.out.println("Raw Password before hashing: " + user.getPassword());

        // Hash the password
        String hashedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(hashedPassword);

        System.out.println("Hashed Password being saved: " + user.getPassword());

        User createdUser = userService.createUser(user);
        return ResponseEntity.ok(createdUser);
    }


    /**
     * Login a user
     */
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest) {
        Optional<User> userOpt = userService.findByEmail(loginRequest.getEmail());

        if (userOpt.isEmpty()) {
            return ResponseEntity.badRequest().body("User not found");
        }

        User user = userOpt.get();

        System.out.println("Stored (hashed) password: " + user.getPassword());
        System.out.println("Entered password: " + loginRequest.getPassword());

        // Correct password matching using BCryptPasswordEncoder
        boolean matches = passwordEncoder.matches(loginRequest.getPassword(), user.getPassword());
        System.out.println("Password matches: " + matches);

//        if (!matches) {
//            return ResponseEntity.badRequest().body("Invalid credentials");
//        }

        // Returning only necessary details
        User userDTO = new User();
        userDTO.setId(user.getId());
        userDTO.setName(user.getName());
        userDTO.setEmail(user.getEmail());

        return ResponseEntity.ok(userDTO);
    }



    @GetMapping("/all")
    public ResponseEntity<?> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }
}
