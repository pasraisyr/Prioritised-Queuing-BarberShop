package com.ccsd.Shop.customers;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "customers")
public class Customer{
    @Id
    private String id;
    private String username;
    private String password;
    private String phoneNumber;

    public Customer(){}

    public Customer(String id, String username, String password, String phoneNumber){
        
        this.id = id ;
        this.username = username ;
        this.password = password ;
        this.phoneNumber = phoneNumber;

    }

    public void setId(String id) {
        this.id = id;
    }

    public String getId() {
        return id;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getUsername() {
        return username;
    } 

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPassword() {
        return password;
    }

    public void setPhonenumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getPhonenumber() {
        return phoneNumber;
    }
}

