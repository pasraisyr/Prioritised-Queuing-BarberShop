package com.ccsd.Shop.customers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/customers")

public class CustomerController {
    
    @Autowired
    private CustomerService customerService;

    @GetMapping
    public List <Customer> getAllCustomers() {
        return customerService.getAllCustomers();
    }

    @GetMapping ("/{id}")
    public ResponseEntity<Customer>
    getCustomerById(@PathVariable String id){
        return customerService.getCustomerById(id).map(ResponseEntity ::ok)
        .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Customer addCustomer(@RequestBody Customer customer) {
        return customerService.addCustomer(customer);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Customer> updateCustomer(@PathVariable String id, @RequestBody Customer customerDetails) {
        Customer updatedCustomer = customerService.updateCustomer(id, customerDetails);
        if (updatedCustomer != null) {
            return ResponseEntity.ok(updatedCustomer);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCustomer(@PathVariable String id) {
        customerService.deleteCustomer(id);
        return ResponseEntity.noContent().build();
    }
}


