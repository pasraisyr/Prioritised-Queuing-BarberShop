package com.ccsd.Shop.PackageStyle;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "packagestyles")
public class PackageStyle {
    @Id
    private String id;
    private String name;
    private String imageUrl;
    private String description;

    public PackageStyle() {}

    public PackageStyle(String id, String name, String imageUrl, String description) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
        this.description = description;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
