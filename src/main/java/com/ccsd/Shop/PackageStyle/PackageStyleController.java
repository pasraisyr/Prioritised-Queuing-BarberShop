package com.ccsd.Shop.PackageStyle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/packages")
public class PackageStyleController {

    @Autowired
    private PackageStyleService packageStyleService;

    @GetMapping
    public List<PackageStyle> getAllPackagestyles() {
        return packageStyleService.getAllPackagestyles();
    }

    @GetMapping("/{id}")
    public ResponseEntity<PackageStyle> getPackagestyleById(@PathVariable String id) {
        return packageStyleService.getPackagestyleById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public PackageStyle addPackagestyle(@RequestBody PackageStyle packageStyle) {
        return packageStyleService.addPackagestyle(packageStyle);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PackageStyle> updatePackagestyle(@PathVariable String id, @RequestBody PackageStyle packageStyleDetails) {
        PackageStyle updatedPackagestyle = packageStyleService.updatePackagestyle(id, packageStyleDetails);
        if (updatedPackagestyle != null) {
            return ResponseEntity.ok(updatedPackagestyle);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePackagestyle(@PathVariable String id) {
        packageStyleService.deletePackagestyle(id);
        return ResponseEntity.noContent().build();
    }
}
