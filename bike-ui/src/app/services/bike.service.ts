import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bike } from '../model/Bike';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type':'application/json'})};

@Injectable()
export class BikeService {
  

  constructor(private http:HttpClient) { }

    getBikes(){
       const url = '/server/api/v1/bikes';
       return this.http.get<Bike[]>(url);
    }

    getBike(id: number){
      const url = '/server/api/v1/bikes/'+id;
      return this.http.get<Bike>(url);
    }

    createBikeRegistration(bike: Bike){
      const url = '/server/api/v1/bikes';
      let body =JSON.stringify(bike);
      return this.http.post(url, body, httpOptions);
    }
  
}
