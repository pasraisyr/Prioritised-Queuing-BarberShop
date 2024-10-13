package com.ccsd.Shop.PackageStyle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class PackageStyleService {

    @Autowired
    private PackageStyleRepository packageStyleRepository;

    public List<PackageStyle> getAllPackagestyles() {
        return packageStyleRepository.findAll();
    }

    public Optional<PackageStyle> getPackagestyleById(String id) {
        return packageStyleRepository.findById(id);
    }

    public PackageStyle addPackagestyle(PackageStyle packageStyle) {
        return packageStyleRepository.save(packageStyle);
    }

    public PackageStyle updatePackagestyle(String id, PackageStyle packageStyleDetails) {
        Optional<PackageStyle> packageStyleOpt = packageStyleRepository.findById(id);
        if (packageStyleOpt.isPresent()) {
            PackageStyle packageStyle = packageStyleOpt.get();
            packageStyle.setName(packageStyleDetails.getName());
            packageStyle.setImageUrl(packageStyleDetails.getImageUrl());
            packageStyle.setDescription(packageStyleDetails.getDescription());
            return packageStyleRepository.save(packageStyle);
        }
        return null;
    }

    public void deletePackagestyle(String id) {
        packageStyleRepository.deleteById(id);
    }
}
