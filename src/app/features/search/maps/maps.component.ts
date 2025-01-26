import {Component, EventEmitter, Input, Output, QueryList, ViewChild, ViewChildren} from '@angular/core';
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

	@Output() onMakerOverEvent = new EventEmitter<MapMarker>();
	@Output() onMakerOutEvent = new EventEmitter<MapMarker>();

	@ViewChild(GoogleMap) googleMap!: GoogleMap;
  @ViewChildren(MapInfoWindow) infoWindows!: QueryList<MapInfoWindow>;

	bounds: any;
	options: google.maps.MapOptions = {};
  circles: IMapCircle[] = [];

	ngOnInit() {
		this.reloadData();
  }
	ngOnChanges(changes: any) {
		this.reloadData();
	}
	reloadData() {

		let north: number = 99999;
		let south: number = 0;
		let east: number = 0;
		let west: number = 99999;

		this.circles = [];
		this.merchantsCopy.forEach(merchant => {
			// add marker
			const coords = merchant.coords.split(',');
			const lat = parseFloat(coords[0]);
			const lng = parseFloat(coords[1]);
			this.addMarker(lng, lat, merchant);

			// recalculate bounds
			north = north !== undefined ? Math.max(north, lat) : lat;
			south = south !== undefined ? Math.min(south, lat) : lat;
			east = east !== undefined ? Math.max(east, lng) : lng;
			west = west !== undefined ? Math.min(west, lng) : lng;
		});

		this.options = {
			center: {lat: this.coordsCopy.lat, lng: this.coordsCopy.lng},
			zoom: this.coordsCopy.zoom,
		};

		this.bounds = { north, south, east, west };
	}
	// https://spatialized.io/advanced-google-maps-markers-definitive-guide-94c5a070615e436ab0a255b9f5100a88
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
				icon: "https://maps.gstatic.com/mapfiles/ms2/micons/lodging.png",
        label: {
          text: merchant.num.length > 0 ? merchant.num : '-',
          className: 'circle-label',
          fontSize: '12px'
        },
      },
      markerWindowInfo: {
        html: '<div><a href=\"' + merchant.web + '\" target=\"_blank\">' + merchant.name + '</a></div>'
      }
    } as IMapCircle);
  }
	ngAfterViewInit() {
		// map available on ngAfterViewInit
		console.log("googleMap bounds", this.bounds);
		this.googleMap.googleMap?.fitBounds(this.bounds);
	}

  clickMap(event: google.maps.MapMouseEvent) {
		// do nothing
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

	// emit marker events
	mouseOverMarker(marker: MapMarker) {
		this.onMakerOverEvent.emit(marker);
  }
	mouseOutMarker(marker: MapMarker) {
		this.onMakerOutEvent.emit(marker);
  }

}
