package com.ccsd.Shop.bookingdates;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
public class BookingDateController {

    @Autowired
    private BookingDateService bookingDateService;

    @PostMapping
    public ResponseEntity<BookingDate> createBooking(@RequestBody BookingDate bookingDate) {
        BookingDate createdBooking = bookingDateService.createBooking(bookingDate);
        return ResponseEntity.ok(createdBooking);
    }

    @GetMapping
    public ResponseEntity<List<BookingDate>> getAllBookings() {
        List<BookingDate> bookings = bookingDateService.getAllBookings();
        return ResponseEntity.ok(bookings);
    }
}