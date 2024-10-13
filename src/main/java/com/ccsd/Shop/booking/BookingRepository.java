package com.ccsd.Shop.booking;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepository extends MongoRepository<Booking, String> {
    Optional<Booking> findByDate(String dateFormatter);
    Optional<Booking> findByTime(String timeFormatter);
    Booking findByUsername(String username);
}
