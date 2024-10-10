package com.ccsd.Shop.booking;


import java.time.LocalDate;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepository extends MongoRepository<Booking, String> {
    List<Booking> findByDate(LocalDate date);
    List<Booking> findByTime(String time);
}
