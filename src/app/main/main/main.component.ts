import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
 
  zoom = 14;
  
  center: google.maps.LatLngLiteral = {
    lat: 35.681236,
    lng: 139.767125
  };
 
  options: google.maps.MapOptions = {
    disableDefaultUI: true
  };

  currentPosition: google.maps.LatLngLiteral;

  constructor() { }

  ngOnInit(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.currentPosition = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
  

}
