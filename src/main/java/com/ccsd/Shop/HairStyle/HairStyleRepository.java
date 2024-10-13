package com.ccsd.Shop.HairStyle;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface HairStyleRepository extends MongoRepository<HairStyle, String> {
    // Additional query methods can be added if necessary
}
