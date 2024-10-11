package com.ccsd.Shop.booking;


import org.springframework.stereotype.Repository;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.time.LocalTime;
import java.time.LocalDate;

import java.util.Optional;

@Repository
public interface BookingRepository extends MongoRepository<Booking, String> {
    Optional<Booking> findByDate(String dateFormatter);
    Optional<Booking> findByTime(String timeFormatter);
}
