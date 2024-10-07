package com.ccsd.Shop.bookingdates;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
// import java.util.Optional;


@Service
public class BookingDateService {
    
    @Autowired
    private BookingDateRepository bookingDateRepository;

    public BookingDate createBooking(BookingDate bookingDate) {
        return bookingDateRepository.save(bookingDate);
    }

    public List<BookingDate> getAllBookings() {
        return bookingDateRepository.findAll();
    }
}