import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MapComponent } from './map/map.component';
import { CoordsComponent } from './coords/coords.component';
import { LatLng } from 'leaflet';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MapComponent, CoordsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'LeafletAngular';

  public coords: LatLng = new LatLng(0,0);

  onMarkerMovedHandler(latlng: LatLng) {
    this.coords = latlng;
    console.log("coords updated");
    
  }
}
