package com.rentalcar.backend.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@Table(name = "cars")

public class Cars {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int year;
    private String name;
    private String description;
    private String price;
    private String image_Url;

    public Cars(){
           }
    public Cars(int id, int year, String name, String description, String price, String image_Url) {
        this.id = id;
        this.year = year;
        this.name = name;
        this.description = description;
        this.price = price;
        this.image_Url = image_Url;
    }
}
