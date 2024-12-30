import {Component, QueryList, ViewChildren} from '@angular/core';
import {GoogleMap, MapCircle, MapInfoWindow, MapMarker} from "@angular/google-maps";

@Component({
  selector: 'app-angular-google-maps',
  standalone: true,
  imports: [
    GoogleMap,
    MapCircle,
    MapMarker,
    MapInfoWindow
  ],
  templateUrl: './angular-google-maps.component.html',
  styleUrl: './angular-google-maps.component.scss'
})
export class AngularGoogleMapsComponent {
  @ViewChildren(MapInfoWindow) infoWindows!: QueryList<MapInfoWindow>;

  options: google.maps.MapOptions = {
    center: {lat: 40, lng: -80},
    zoom: 4
  };
  circles: IMapCircle[] = [
    {
      id: 1,
      lat: 40,
      lng: -80,
      circleOptions: {
        fillColor: '#ff0000',
        fillOpacity: 0.5,
        strokeWeight: 1,
        strokeColor: '#ff0000',
        clickable: false,
        editable: false,
        zIndex: 1,
        radius: 100000 // in meters
      },
      markerOptions: {
        lat: 40,
        lng: -80,
        label: {
          text: 'A',
          className: 'circle-label',
          fontSize: '12px'
        }
      },
      markerWindowInfo: {
        html: '<div>Marker A</div>'
      }
    }
  ]

  clickMap(event: google.maps.MapMouseEvent) {
    const lat = event.latLng?.lat();
    const lng = event.latLng?.lng();
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
        radius: 100000 // in meters
      },
      markerOptions: {
        lat: lat,
        lng: lng,
        label: {
          text: 'A',
          className: 'circle-label',
          fontSize: '12px'
        }
      },
      markerWindowInfo: {
        html: '<div>Marker A</div>'
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
