package com.ccsd.Shop.booking;


import org.springframework.stereotype.Repository;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.time.LocalTime;
import java.time.LocalDate;

import java.util.List;

@Repository
public interface BookingRepository extends MongoRepository<Booking, String> {
    List<Booking> findByDate(LocalDate date);
    List<Booking> findByTime(LocalTime time);
}
