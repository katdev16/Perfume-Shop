package com.katdev.accountabilityapp.config;



import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.DefaultSecurityFilterChain;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable()) // Disable CSRF (only if necessary)
                .authorizeHttpRequests(auth -> auth
                        .anyRequest().permitAll() // Allow all requests (adjust for production)
                )
                .cors(cors -> { }); // Enable CORS (replacing deprecated method)
        return http.build();
    }
}
