package com.ccsd.Shop.users;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpSession;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable String id) {
        return userService.getUserById(id).map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public User register(@RequestBody User user) {
        return userService.register(user);
    }

    @PutMapping("/{username}")
    public User updateUser(@PathVariable String username, @RequestBody User userDetails) {
        return userService.updateUserByUsername(username, userDetails);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable String id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }

    // Login endpoint with session management
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody UserLoginRequest loginRequest, HttpSession session) {
        User user = userService.loginUser(loginRequest.getUsername(), loginRequest.getPassword());
        
        if (user != null) {
            // Store user details in the session
            session.setAttribute("username", loginRequest.getUsername());
            session.setAttribute("role", user.getRole());
            
            return ResponseEntity.ok(user);
        } else {
            // If credentials are wrong, return 401 Unauthorized
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
        }
    }

    
    // Get profile based on session data
    @GetMapping("/profile")
    public ResponseEntity<Map<String, Object>> getProfile(HttpSession session) {
        // Retrieve the email and role from the session
        String username = (String) session.getAttribute("username");
        // Check if the user is logged in by verifying the email
        if (username != null) {
            // Fetch the user details using the email
            User user = userService.findByEmail(username);

            if (user != null) {
                // Prepare a map to include both user details and role
                Map<String, Object> response = Map.of(
                    "user", user,
                    "role", session.getAttribute("role")
                );
                return ResponseEntity.ok(response);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("error", "User not found"));
            }
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("error", "Unauthorized access"));
        }
    }

    // Logout endpoint to invalidate the session
    // @PostMapping("/logout")
    // public ResponseEntity<Void> logoutUser(HttpSession session) {
    //     session.invalidate();  // Invalidate the session
    //     return ResponseEntity.noContent().build();
    // }
}