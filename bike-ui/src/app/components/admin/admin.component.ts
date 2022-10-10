import { Component, OnInit } from '@angular/core';
import { BikeService} from '../../services/bike.service';
import { Bike } from '../../model/Bike';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  bikes = new Array<Bike>();

  constructor(private bikeService:BikeService) { }

  ngOnInit(): void {
    this.getBikes();
  }

  getBikes(): void  {
    this.bikeService.getBikes().subscribe(response => 
      {
        this.bikes = response.map(item => 
        {
          return new Bike( 
            item.id,
            item.name,
            item.email,
            item.phone,
            item.model,
            item.serialNumber,
            item.purchasePrice,
            item.purchaseDate,
            item.contact
          );
        });
      });
  }
}
