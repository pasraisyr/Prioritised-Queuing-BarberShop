package com.ccsd.Shop;

import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .cors() // Enables the CORS configuration
            .and()
            .csrf().disable() // Disable CSRF if not using cookies for session authentication
            .authorizeRequests()
            .anyRequest().permitAll(); // Allow all requests without authentication

        return http.build();
    }
}
