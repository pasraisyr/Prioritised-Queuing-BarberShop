package com.ccsd.Shop.bookingdates;

import java.time.LocalDate;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingDateRepository extends MongoRepository<BookingDate, Long> {
    BookingDate findByBookingDate (LocalDate Date);
}

