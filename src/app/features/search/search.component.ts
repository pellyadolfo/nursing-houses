import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { CommonModule } from '@angular/common';
import { AngularGoogleMapsComponent } from './maps/maps.component';
import { ListboxModule } from 'primeng/listbox';
import { SplitterModule } from 'primeng/splitter';
import { MenubarModule } from 'primeng/menubar';

import merchants_ES_GI from '../../../assets/ES_GI.json';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { PanelModule } from 'primeng/panel';
import { SelectChangeEvent, SelectModule } from 'primeng/select';
import { DataImportsService } from '../../services/dataImportsService';
import { FiltersComponent } from './filters/filters.component';

interface Coords {
	lat: number;
  lng: number;
	zoom: number;
}
interface Service {
  name: string;
  code: string;
	inactive: boolean;
}
interface City {
  name: string;
  code: string;
	inactive: boolean;
}
interface Country {
  name: string;
  code: string;
	inactive: boolean;
}

@Component({
  selector: 'search-page',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
	standalone: true,
  imports: [CommonModule, RouterOutlet, InputTextModule, ButtonModule, MessageModule, FormsModule, AngularGoogleMapsComponent, ListboxModule, SplitterModule, MenubarModule, ScrollPanelModule, PanelModule, SelectModule, FiltersComponent],
})
export class SearchPage {

  services: Service[];
	selectedServiceCode = 'RE';

  cities: City[];
	selectedCityCode = 'GI';

  countries: Country[];
	selectedCountryCode = 'ES';

  merchants: any[];
  coords: Coords;

	desktop: boolean = true;

  constructor(private dataImportsService: DataImportsService) {

		if (document.documentElement.clientWidth < 400) {
			this.desktop = false;
		}

		this.services = [
      { name: "Residencias", code: "RE", inactive: false },
      { name: "Centros de Dia", code: "CD", inactive: true },
      { name: "Asistencia a Mayores", code: "AM", inactive: true },
      { name: "Asistencia a Domicilio", code: "AD", inactive: true },
    ];
    this.countries = [
      { name: "Australia", code: "AU", inactive: true },
      { name: "Brazil", code: "BR", inactive: true },
      { name: "España", code: "ES", inactive: false },
      { name: "France", code: "FR", inactive: true },
      { name: "Germany", code: "DE", inactive: true },
      { name: "Japan", code: "JP", inactive: true },
      { name: "United States", code: "US", inactive: true },
			{ name: "Sweden", code: "SE", inactive: true}, 
			{ name: "Switzerland", code: "CH", inactive: true}, 
		];
    this.cities = [
      { name: "Oviedo", code: "OV", inactive: true },
      { name: "Gijón", code: "GI", inactive: false },
      { name: "Avilés", code: "AV", inactive: false },
      { name: "Nava", code: "NA", inactive: true },
      { name: "Luanco", code: "LU", inactive: true }
    ];

		this.merchants = merchants_ES_GI.RES;
		this.coords = merchants_ES_GI.coords;
	}

	onChange(event: SelectChangeEvent) {
    console.log(this.selectedCountryCode);
    console.log(this.selectedCityCode);

		this.dataImportsService.loadData(this.selectedCountryCode, this.selectedCityCode).then(result => {
			this.merchants = result.RES;
			this.coords = result.coords;
			console.log(result.coords);
		})
	}

	over(){
    console.log("Mouseover called");
  }
	out(){
    console.log("Mouseout called");
  }

}
