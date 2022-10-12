import { Component, OnInit } from '@angular/core';
import { Bike } from 'src/app/model/Bike';
import { BikeService } from 'src/app/services/bike.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})

export class ViewRegistrationComponent implements OnInit {
  public bikeRegistration!: Bike;
  
  constructor(private bikeService: BikeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
        this.getBikeRegistration(this.route.snapshot.params['id']);
  }

  getBikeRegistration(id: number){
    this.bikeService.getBike(id).subscribe(
      data => {
        this.bikeRegistration = data;
      },
      err => console.error(err),
      () => console.log('bikes loaded')
    );
  }

}
