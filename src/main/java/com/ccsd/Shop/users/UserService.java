package com.ccsd.Shop.users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository customerRepository;

    // Getting all 
    public List<User> getAllUsers() {
        return customerRepository.findAll();
    }

    // Getting single 
    public Optional<User> getUserById(String id) {
        return customerRepository.findById(id);
    }

    // Creating new data in repository

    public User addUser(User customer) {
        return customerRepository.save(customer);
    }

    // Updating the 

    public User updateUser(String id, User customerDetails) {
        Optional<User> customerOpt = customerRepository.findById(id);
        if (customerOpt.isPresent()) {

            // Get from database

            User customer = customerOpt.get();
            customer.setUsername(customerDetails.getUsername());
            customer.setPassword(customerDetails.getPassword());
            customer.setPhonenumber(customerDetails.getPhonenumber());
            return customerRepository.save(customer);
        }
        return null;
    }

    // Deleting
    
    public void deleteUser(String id) {
        customerRepository.deleteById(id);
    }

}
