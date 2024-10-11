package com.ccsd.Shop.booking;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;

@Document(collection = "bookings")
public class Booking {
    @Id
    private String id;
    private LocalDate date;
    private LocalTime time;
    private String packageType;
    private String style;

    public Booking() {}

    // Constructors
    public Booking(String id, LocalDate date, LocalTime time, String packageType, String style) {
        this.id = id;
        this.date = date;
        this.time = time;
        this.packageType = packageType;
        this.style = style;
    }

    // Getters and Setters
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public LocalDate getDate() {
        return date;
    }
    public void setDate(LocalDate date) {
        this.date = date;
    }
    public LocalTime getTime() {
        return time;
    }
    public void setTime(LocalTime time) {
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

    // Method to create a map of id and formattedDate
    // public static Map<String, String> createIdDateMap(List<Booking> bookings) {
    //     Map<String, String> idDateMap = new HashMap<>();
    //     for (Booking booking : bookings) {
    //         idDateMap.put(booking.getId(), booking.getFormattedDate());
    //     }
    //     return idDateMap;
    // }
}
