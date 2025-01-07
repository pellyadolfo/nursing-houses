import {Component, QueryList, ViewChildren} from '@angular/core';
import {GoogleMap, MapCircle, MapInfoWindow, MapMarker} from "@angular/google-maps";
import merchants from '../../../../assets/ES_GI.json';

interface IMapCircleOptions{
  fillColor: string;
  fillOpacity: number;
  strokeWeight: number;
  strokeColor: string;
  clickable: boolean;
  editable: boolean;
  zIndex: number;
  radius: number;
}
export interface IMapCircle{
  id: number;
  lat: number;
  lng: number;
  circleOptions: IMapCircleOptions;
  markerOptions: IMapMarker;
  markerWindowInfo: {
    html: string;
  }
}
interface IMapMarker{
  lat: number;
  lng: number;
  label?: {
    text: string;
    className: string;
    fontSize: string;
  };
}

@Component({
  selector: 'app-angular-google-maps',
  standalone: true,
  imports: [
    GoogleMap,
    MapCircle,
    MapMarker,
    MapInfoWindow
  ],
  templateUrl: './maps.component.html',
  styleUrl: './maps.component.scss'
})
export class AngularGoogleMapsComponent {
  @ViewChildren(MapInfoWindow) infoWindows!: QueryList<MapInfoWindow>;

	merchants: any[];

	constructor() {
		this.merchants = merchants.RES;
	}
  ngOnInit() {
		this.merchants.forEach(merchants => {
			const coords = merchants.coords.split(',');
			const lat = parseFloat(coords[0]);
			const lng = parseFloat(coords[1]);
			//console.log("lat", lat)
			//console.log("lng", lng)
			this.addMarker(lng, lat, merchants);
		});
  }

  options: google.maps.MapOptions = {
    center: {lat: merchants.coords.lat, lng: merchants.coords.lng},
    zoom: merchants.coords.zoom
  };

  circles: IMapCircle[] = []

  clickMap(event: google.maps.MapMouseEvent) {
		// do nothing
  }

  addMarker(lat: any, lng: any, merchant: any) {
    this.circles.push({
      id: this.circles.length + 1,
      lat: lat,
      lng: lng,
      circleOptions: {
        fillColor: '#ff0000',
        fillOpacity: 0.5,
        strokeWeight: 1,
        strokeColor: '#ff0000',
        clickable: false,
        editable: false,
        zIndex: 1,
        radius: 10 // in meters
      },
      markerOptions: {
        lat: lat,
        lng: lng,
        label: {
          text: merchant.num,
          className: 'circle-label',
          fontSize: '12px'
        }
      },
      markerWindowInfo: {
        html: '<div><a href=\"' + merchant.web + '\" target=\"_blank\">' + merchant.name + '</a></div>'
      }
    } as IMapCircle);
  }

  openMarkerInfoWindow(marker: MapMarker, markerIndex: number) {
    this.infoWindows.forEach((infoWindow: MapInfoWindow, index: number ) => {
      if (index === markerIndex) {
        infoWindow.open(marker);
      } else {
        infoWindow.close();
      }
    });
  }

}
