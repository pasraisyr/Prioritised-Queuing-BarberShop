package com.ccsd.Shop.booking;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.springframework.data.annotation.Id;


public class Booking {
    @Id
    private String id;
    private LocalDateTime date; // This can include both date and time
    private LocalDateTime time;
    private String packageType; // For the package
    private String style; // For the style

    // Constructors
    public Booking(String id, LocalDateTime date, LocalDateTime time, String packageType, String style) {
        this.id=id;
        this.date = date;
        this.time = time;
        this.packageType = packageType;
        this.style = style;
    }

    // Getters and Setters
    public String getId(){
        return id;
    }
    public void setId(String id){
        this.id = id;
    }
    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }

    public LocalDateTime getTime() {
        return time;
    }

    public void setTime(LocalDateTime time) {
        this.time = time;
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
    public String getFormattedDate() {
        DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
        return date.format(dateFormatter);
    }
    public String getFormattedTime() {
        DateTimeFormatter timeFormatter = DateTimeFormatter.ofPattern("HH:mm");
        return time.format(timeFormatter);
    }
}
