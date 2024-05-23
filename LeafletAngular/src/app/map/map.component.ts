import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements OnInit {
  @Output() coordinatesFired = new EventEmitter<L.LatLng>()
  
  private map: L.Map;

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 39.8282, -98.5795 ],
      zoom: 3
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    

    tiles.addTo(this.map);
    const marker = L.marker([51.5, -0.09]);
    marker.options.draggable = true;
    marker.on("click", () => {this.coordinatesFired.emit(marker.getLatLng())});
    marker.on("move", () => {this.coordinatesFired.emit(marker.getLatLng())});

    marker.addTo(this.map);
  } 

  


  constructor() {
   }
  ngOnInit(): void {
    this.initMap();
   }
}
