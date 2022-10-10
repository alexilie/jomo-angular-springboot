package com.jomo.globomatics.jomoangularspringboot.controller;

import com.jomo.globomatics.jomoangularspringboot.repository.BikeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import com.jomo.globomatics.jomoangularspringboot.model.Bike;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v1/bikes")
public class BikeController {
    @Autowired
    private BikeRepository bikeRepository;

    @GetMapping
    public List<Bike> list(){ return bikeRepository.findAll(); }

    @GetMapping("/{id}")
    public Bike get(@PathVariable("id") long id){  return bikeRepository.getOne(id); }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void create (@RequestBody Bike bike){ bikeRepository.save(bike); }

}
