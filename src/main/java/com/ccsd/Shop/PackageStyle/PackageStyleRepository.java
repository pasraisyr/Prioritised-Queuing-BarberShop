package com.ccsd.Shop.PackageStyle;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface PackageStyleRepository extends MongoRepository<PackageStyle, String> {
    // Additional query methods can be added if necessary
}
