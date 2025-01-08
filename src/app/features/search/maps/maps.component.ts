import {Component, Input, QueryList, ViewChildren} from '@angular/core';
import {GoogleMap, MapCircle, MapInfoWindow, MapMarker} from "@angular/google-maps";

interface Coords {
	lat: number;
  lng: number;
	zoom: number;
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
	id: string,
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

	@Input('merchantsCopy') merchantsCopy!: any[];
	@Input('coordsCopy') coordsCopy!: Coords;

  @ViewChildren(MapInfoWindow) infoWindows!: QueryList<MapInfoWindow>;

	options: google.maps.MapOptions = {};
  circles: IMapCircle[] = [];

	ngOnInit() {
		this.reloadData();
  }
	ngOnChanges(changes: any) {
		this.reloadData();
	}
	reloadData() {
		this.merchantsCopy.forEach(merchant => {
			const coords = merchant.coords.split(',');
			const lat = parseFloat(coords[0]);
			const lng = parseFloat(coords[1]);
			this.addMarker(lng, lat, merchant);
		});

		this.options = {
			center: {lat: this.coordsCopy.lat, lng: this.coordsCopy.lng},
			zoom: this.coordsCopy.zoom,
		};
	}

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
				id: "MK_" + merchant.id,
        lat: lat,
        lng: lng,
        label: {
          text: merchant.num,
          className: 'circle-label',
          fontSize: '12px'
        },
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

	mouseOverMarker(marker: MapMarker) {
    console.log('mouse over marker', marker);
    console.log('mouse over marker', marker.options);
    console.log('mouse over marker', marker.marker);
  }

}
