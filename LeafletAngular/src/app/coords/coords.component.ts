import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { LatLng } from 'leaflet';

@Component({
  selector: 'app-coords',
  standalone: true,
  imports: [],
  templateUrl: './coords.component.html',
  styleUrl: './coords.component.scss'
})
export class CoordsComponent implements OnChanges {
  
  @Input() coords: LatLng;

  ngOnChanges(changes: SimpleChanges): void {
      console.log("coordsComponent changes ", changes['coords']);
  }
}
