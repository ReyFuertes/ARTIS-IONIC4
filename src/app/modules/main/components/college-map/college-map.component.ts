import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Platform } from '@ionic/angular';
import {GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment} from '@ionic-native/google-maps/ngx';

@Component({
  selector: 'app-college-map',
  templateUrl: './college-map.component.html',
  styleUrls: ['./college-map.component.scss']
})

export class CollegeMapComponent implements OnInit {

  map: GoogleMap;
  @ViewChild('map') mapElement: ElementRef;

  constructor(private platform: Platform) { }

  async ngOnInit() {
    await this.platform.ready();
    await this.loadMap();
  }

  loadMap() {

    // This code is necessary for browser
    console.log(
      Environment.setEnv({
        'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyDSmkkSVeAFvf6WWGrP8wu0nNQ3e8BDG7k',
        'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyDSmkkSVeAFvf6WWGrP8wu0nNQ3e8BDG7k'
      })
    );

    this.map = GoogleMaps.create('map_canvas');
    console.log(this.mapElement.nativeElement);

    // let mapOptions: GoogleMapOptions = {
    //   camera: {
    //      target: {
    //        lat: 43.0741904,
    //        lng: -89.3809802
    //      },
    //      zoom: 18,
    //      tilt: 30
    //    }
    // };
  }

}
