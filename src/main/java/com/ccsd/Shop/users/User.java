package com.ccsd.Shop.users;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class User{
    @Id
    private String id;
    private String username;
    private String password;
    private String phoneNumber;
    private String role;
    private String name;


    public User(){}

    public User(String id, String username, String password, String phoneNumber, String role, String name){
        
        this.id = id ;
        this.username = username ;
        this.password = password ;
        this.phoneNumber = phoneNumber;
        this.role = role;
        this.name = name;

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

    //boolean isEqual = (str1 == str2); // true
    //boolean isEqual = str1.equals(str2); // true

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setRole(String role) { 
        this.role = role;
    }

    public String getRole() {
        return role;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}
