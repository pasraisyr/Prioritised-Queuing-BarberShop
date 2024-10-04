package com.ccsd.Shop.customers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {
    @Autowired
    private CustomerRepository customerRepository;

    // Getting all 
    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    // Getting single 
    public Optional<Customer> getCustomerById(String id) {
        return customerRepository.findById(id);
    }

    // Creating new data in repository

    public Customer addCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    // Updating the 

    public Customer updateCustomer(String id, Customer customerDetails) {
        Optional<Customer> customerOpt = customerRepository.findById(id);
        if (customerOpt.isPresent()) {

            // Get from database

            Customer customer = customerOpt.get();
            customer.setUsername(customerDetails.getUsername());
            customer.setPassword(customerDetails.getPassword());
            customer.setPhonenumber(customerDetails.getPhonenumber());
            return customerRepository.save(customer);
        }
        return null;
    }

    // Deleting
    
    public void deleteCustomer(String id) {
        customerRepository.deleteById(id);
    }

}
