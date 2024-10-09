package com.ccsd.Shop.booking;

//import java.time.LocalDateTime;
import com.fasterxml.jackson.annotation.JsonFormat;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;


@Document(collection = "bookings")
public class Booking {
    @Id
    private String id;
    private LocalDate date; // This can include both date and time
    private LocalTime time;
    private String packageType; // For the package
    private String style; // For the style

    public Booking (){}

    // Constructors
    public Booking(String id, LocalDate date, LocalTime time, String packageType, String style) {
        this.id=id;
        this.date = date;
        this.time = time;
        this.packageType = packageType;
        this.style = style;
    }
    // @JsonFormat(pattern = "dd-MM-yyyy")
    // private LocalDate date;

    // @JsonFormat(pattern = "HH:mm:ss")
    // private LocalTime time;

    // Getters and Setters
    public String getId(){
        return id;
    }
    public void setId(String id){
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
}
