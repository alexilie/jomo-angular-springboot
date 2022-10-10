package com.jomo.globomatics.jomoangularspringboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.jomo.globomatics.jomoangularspringboot.model.Bike;

public interface BikeRepository extends JpaRepository<Bike, Long> {
}
