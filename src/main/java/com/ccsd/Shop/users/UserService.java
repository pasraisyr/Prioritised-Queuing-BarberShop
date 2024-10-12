package com.ccsd.Shop.users;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // Getting all users
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Getting a single user by ID
    public Optional<User> getUserById(String id) {
        return userRepository.findById(id);
    }

    // Adding a new user
    public User register(User user) {
        // Check if the username already exists
        if (userRepository.findByUsername(user.getUsername()) != null) {
            throw new RuntimeException("Username already taken");
        }
        return userRepository.save(user);
    }

    
 

    // Updating a user
    public User updateUserByUsername(String username, User userDetails) {
        User user = userRepository.findByUsername(username);
        if (user != null) {
            user.setUsername(userDetails.getUsername());
            user.setPassword(userDetails.getPassword());
            user.setPhoneNumber(userDetails.getPhoneNumber());
            user.setName(userDetails.getName());
            user.setRole(userDetails.getRole());
            return userRepository.save(user);
        }
        return null;
    }


    // Deleting a user
    public void deleteUser(String id) {
        userRepository.deleteById(id);
    }

    // Login validation
    public User loginUser(String username, String password) {
        User user = userRepository.findByUsername(username);
        if (user != null && user.getPassword().equals(password)) {
            return user;
        }
        return null;
    }

    
}
