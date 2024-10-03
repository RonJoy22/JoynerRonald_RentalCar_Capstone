package com.rentalcar.backend.controller;

import com.rentalcar.backend.model.User;
import com.rentalcar.backend.common.UserRepo;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/AscentRentals")
public class UserController {
        private final UserRepo userRepo;

        public UserController(UserRepo userRepo) {

            this.userRepo = userRepo;
        }

        @GetMapping("/Login")
        public List<User> getAllUsers() {
            List<User> user = userRepo.findAll();
            return user;
        }
        @PostMapping("/Login/{email}")
    @ResponseStatus(HttpStatus.OK)
    public List<User> getUserByEmail(@PathVariable String email) {
        List<User> user = userRepo.findByEmail(email);

        if (user.isEmpty()) {
            throw new RuntimeException("User not found for email: " + email);
        }

        return user;
    }


    // Post a new account
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/SignUp")
    void createUsers(@RequestBody User user) {
        userRepo.save(user);
    }

    // Delete a user account
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    void deleteUsers(@PathVariable Integer id) {
        userRepo.deleteById(id);
    }
}