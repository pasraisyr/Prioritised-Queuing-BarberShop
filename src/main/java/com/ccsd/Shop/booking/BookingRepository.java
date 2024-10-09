package com.ccsd.Shop.booking;



import org.springframework.data.mongodb.repository.MongoRepository;

import org.springframework.stereotype.Repository;
import java.time.LocalTime;

@Repository
public interface BookingRepository extends MongoRepository<Booking, LocalTime> {
    Booking findByDate (LocalDate date);
    Booking findByTime (LocalTime time);
}
