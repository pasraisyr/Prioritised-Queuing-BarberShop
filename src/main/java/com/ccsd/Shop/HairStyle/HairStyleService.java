package com.ccsd.Shop.HairStyle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class HairStyleService {

    @Autowired
    private HairStyleRepository hairstyleRepository;

    // Get all hairstyles
    public List<HairStyle> getAllHairstyles() {
        return hairstyleRepository.findAll();
    }

    // Get a hairstyle by ID
    public Optional<HairStyle> getHairstyleById(String id) {
        return hairstyleRepository.findById(id);
    }

    // Add a new hairstyle
    public HairStyle addHairstyle(HairStyle hairstyle) {
        return hairstyleRepository.save(hairstyle);
    }

    // Update a hairstyle
    public HairStyle updateHairstyle(String id, HairStyle hairstyleDetails) {
        Optional<HairStyle> hairstyleOpt = hairstyleRepository.findById(id);
        if (hairstyleOpt.isPresent()) {
            HairStyle hairstyle = hairstyleOpt.get();
            hairstyle.setName(hairstyleDetails.getName());
            hairstyle.setImageUrl(hairstyleDetails.getImageUrl());
            hairstyle.setDescription(hairstyleDetails.getDescription());
            return hairstyleRepository.save(hairstyle);
        }
        return null;
    }

    // Delete a hairstyle
    public void deleteHairstyle(String id) {
        hairstyleRepository.deleteById(id);
    }
}
