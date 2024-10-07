package com.ccsd.Shop.bookingdates;

import java.time.LocalDateTime;

public class BookingDate {
    private LocalDateTime dateTime; // This can include both date and time
    private String packageType; // For the package
    private String style; // For the style

    // Constructors
    public BookingDate(LocalDateTime dateTime, String packageType, String style) {
        this.dateTime = dateTime;
        this.packageType = packageType;
        this.style = style;
    }

    // Getters and Setters
    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public void setDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
    }

    public String getPackageType() {
        return packageType;
    }

    public void setPackageType(String packageType) {
        this.packageType = packageType;
    }

    public String getStyle() {
        return style;
    }

    public void setStyle(String style) {
        this.style = style;
    }
}