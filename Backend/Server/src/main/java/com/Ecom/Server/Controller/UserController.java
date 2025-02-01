package com.katdev.accountabilityapp.controller;

import com.katdev.accountabilityapp.DataTransfer.LoginRequest;
import com.katdev.accountabilityapp.DataTransfer.TaskDTO;
import com.katdev.accountabilityapp.DataTransfer.UserDTO;
import com.katdev.accountabilityapp.model.User;
import com.katdev.accountabilityapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserService userService;

    /**
     * Get all users.
     */
    @GetMapping
    public ResponseEntity<List<UserDTO>> getAllUsers() {
        List<UserDTO> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }

    @GetMapping("/{id}/tasks")
    public ResponseEntity<List<TaskDTO>> getTasksForUser(@PathVariable int id) {
        List<TaskDTO> tasks = userService.getTasksForUser(id);
        return ResponseEntity.ok(tasks);
    }

    /**
     * Get a user by ID.
     */
//    @GetMapping("/{id}")
//    public ResponseEntity<UserDTO> getUserById(@PathVariable int id) {
//        UserDTO userDTO = userService.getUserById(id);
//        return ResponseEntity.ok(userDTO);
//    }

    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> getUserById(@PathVariable int id) {
        UserDTO userDTO = userService.getUserById(id);
        return ResponseEntity.ok(userDTO);
    }

    /**
     * Create a new user.
     */
    @PostMapping
    public ResponseEntity<UserDTO> createUser(@RequestBody User user) {
        UserDTO createdUser = userService.createUser(user);
        return ResponseEntity.ok(createdUser);
    }

    /**
     * Update an existing user.
     */
    @PutMapping("/{id}")
    public ResponseEntity<UserDTO> updateUser(@PathVariable int id, @RequestBody User updatedUser) {
        UserDTO userDTO = userService.updateUser(id, updatedUser);
        return ResponseEntity.ok(userDTO);
    }

    /**
     * Delete a user by ID.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUserById(@PathVariable int id) {
        String message = userService.deleteUserById(id);
        return ResponseEntity.ok(message);
    }

    /**
     * Assign a task to a user.
     */
    @PostMapping("/{userId}/tasks/{taskId}")
    public ResponseEntity<String> assignTaskToUser(@PathVariable int userId, @PathVariable int taskId) {
        userService.assignTaskToUser(userId, taskId);
        return ResponseEntity.ok("Task assigned to user successfully");
    }

    @PostMapping("/{id}/tasks")
    public ResponseEntity<TaskDTO> createTaskForUser(@PathVariable int id, @RequestBody TaskDTO taskDTO) {
        TaskDTO createdTask = userService.createTaskForUser(id, taskDTO);
        return new ResponseEntity<>(createdTask, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest) {
        User user = userService.findByEmail(loginRequest.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

//        if (!user.getPassword().equals(loginRequest.getPassword())) {
//            throw new RuntimeException("Invalid credentials");
//        }

        // Map User to DTO to avoid exposing sensitive data
        UserDTO userDTO = new UserDTO();
        userDTO.setId(user.getId());
        userDTO.setName(user.getName());
        userDTO.setEmail(user.getEmail());

        return ResponseEntity.ok(userDTO);
    }

}
