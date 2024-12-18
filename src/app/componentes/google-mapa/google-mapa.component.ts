import { Component, OnInit } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';


@Component({
  selector: 'app-google-mapa',
  templateUrl: './google-mapa.component.html',
  styleUrls: ['./google-mapa.component.scss'],
})
export class GoogleMapaComponent  implements OnInit {


  constructor() { }    

   async ngOnInit() {  
    const apiKey = 'AIzaSyCajYYAPBSYGchXYMoT2p2axPk2vsFA_Bs';
    const mapRef = document.getElementById('map')!;
    const newMap = await GoogleMap.create({
      id: 'my-map', // Unique identifier for this map instance
      element: mapRef, // reference to the capacitor-google-map element
      apiKey: apiKey, // Your Google Maps API Key
      config: {
        center: {
          // The initial position to be rendered by the map
          lat: -33.515910,
          lng: -70.716874,
        },
        zoom: 8, // The initial zoom level to be rendered by the map
      },
    });


  }

}
