package com.ccsd.Shop.HairStyle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/hairstyles")
public class HairStyleController {

    @Autowired
    private HairStyleService hairstyleService;

    // Get all hairstyles
    @GetMapping
    public List<HairStyle> getAllHairstyles() {
        return hairstyleService.getAllHairstyles();
    }

    // Get a hairstyle by ID
    @GetMapping("/{id}")
    public ResponseEntity<HairStyle> getHairstyleById(@PathVariable String id) {
        return hairstyleService.getHairstyleById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Add a new hairstyle
    @PostMapping
    public HairStyle addHairstyle(@RequestBody HairStyle hairstyle) {
        return hairstyleService.addHairstyle(hairstyle);
    }

    // Update a hairstyle
    @PutMapping("/{id}")
    public ResponseEntity<HairStyle> updateHairstyle(@PathVariable String id, @RequestBody HairStyle hairstyleDetails) {
        HairStyle updatedHairstyle = hairstyleService.updateHairstyle(id, hairstyleDetails);
        if (updatedHairstyle != null) {
            return ResponseEntity.ok(updatedHairstyle);
        }
        return ResponseEntity.notFound().build();
    }

    // Delete a hairstyle
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteHairstyle(@PathVariable String id) {
        hairstyleService.deleteHairstyle(id);
        return ResponseEntity.noContent().build();
    }
}
