import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { CommonModule } from '@angular/common';
import { AngularGoogleMapsComponent } from './features/maps/maps.component';
import { ListboxModule } from 'primeng/listbox';
import { MenuItem, SelectItemGroup } from 'primeng/api';
import { SplitterModule } from 'primeng/splitter';
import { MenubarModule } from 'primeng/menubar';

import merchants_ES_GI from '../assets/ES_GI.json';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { PanelModule } from 'primeng/panel';
import { SelectChangeEvent, SelectModule } from 'primeng/select';
import { DataImportsService } from './services/dataImportsService';

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
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, InputTextModule, ButtonModule, MessageModule, FormsModule, AngularGoogleMapsComponent, ListboxModule, SplitterModule, MenubarModule, ScrollPanelModule, PanelModule, SelectModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  text = '';
  msg = '';

  services: Service[];
	selectedServiceCode = 'RE';

  cities: City[];
	selectedCityCode = 'GI';
	//selectedCity: City;

  countries: Country[];
	selectedCountryCode = 'ES';
	selectedCountries: any[];

  merchants: any[];

  groupedCities: SelectItemGroup[];

	menuItems: MenuItem[] = [];

	desktop: boolean = true;

  constructor(private dataImportsService: DataImportsService) {

		this.services = [
      { name: "Residencias", code: "RE", inactive: false },
      { name: "Centros de Dia", code: "CD", inactive: true },
      { name: "Asistencia a Mayores", code: "AM", inactive: true },
      { name: "Asistencia a Domicilio", code: "AD", inactive: true },
    ];

    this.countries = [
      { name: "Australia", code: "AU", inactive: true },
      { name: "Brazil", code: "BR", inactive: true },
      { name: "China", code: "CN", inactive: true },
      { name: "Egypt", code: "EG", inactive: true },
      { name: "España", code: "ES", inactive: false },
      { name: "France", code: "FR", inactive: true },
      { name: "Germany", code: "DE", inactive: true },
      { name: "India", code: "IN", inactive: true },
      { name: "Japan", code: "JP", inactive: true },
      { name: "United States", code: "US", inactive: true },
			{ name: "South Africa", code: "ZA", inactive: true }, 
			{ name: "South Georgia and the South Sandwich Islands", code: "GS", inactive: true}, 
			{ name: "Sri Lanka", code: "LK", inactive: true}, 
			{ name: "Sudan", code: "SD", inactive: true}, 
			{ name: "Suriname", code: "SR", inactive: true}, 
			{ name: "Svalbard and Jan Mayen", code: "SJ", inactive: true}, 
			{ name: "Swaziland", code: "SZ", inactive: true}, 
			{ name: "Sweden", code: "SE", inactive: true}, 
			{ name: "Switzerland", code: "CH", inactive: true}, 
			{ name: "Syrian Arab Republic", code: "SY", inactive: true}, 
			{ name: "Taiwan, Republic of China", code: "TW", inactive: true}, 
			{ name: "Tajikistan", code: "TJ", inactive: true}, 
			{ name: "Tanzania, United Republic of", code: "TZ", inactive: true}, 
			{ name: "Thailand", code: "TH", inactive: true}, 
			{ name: "Timor-Leste", code: "TL", inactive: true},
			{ name: "Togo", code: "TG", inactive: true}, 
			{ name: "Tokelau", code: "TK", inactive: true}, 
			{ name: "Tonga", code: "TO", inactive: true}, 
		];

    this.cities = [
      { name: "Oviedo", code: "OV", inactive: true },
      { name: "Gijón", code: "GI", inactive: false },
      { name: "Avilés", code: "AV", inactive: false },
      { name: "Nava", code: "NA", inactive: true },
      { name: "Luanco", code: "LU", inactive: true }
    ];

		//this.selectedCity;
		this.selectedCountries = []

    this.groupedCities = [
      {
        label: "Germany",
        value: "de",
        items: [
          { label: "Berlin", value: "Berlin" },
          { label: "Frankfurt", value: "Frankfurt" },
          { label: "Hamburg", value: "Hamburg" },
          { label: "Munich", value: "Munich" }
        ]
      },
      {
        label: "USA",
        value: "us",
        items: [
          { label: "Chicago", value: "Chicago" },
          { label: "Los Angeles", value: "Los Angeles" },
          { label: "New York", value: "New York" },
          { label: "San Francisco", value: "San Francisco" }
        ]
      },
      {
        label: "Japan",
        value: "jp",
        items: [
          { label: "Kyoto", value: "Kyoto" },
          { label: "Osaka", value: "Osaka" },
          { label: "Tokyo", value: "Tokyo" },
          { label: "Yokohama", value: "Yokohama" }
        ]
      }
    ];

		this.merchants = merchants_ES_GI.RES;

		if (document.documentElement.clientWidth < 400) { // 768px portrait
			this.desktop = false;
		}
  }

	onChange(event: SelectChangeEvent) {
    console.log(this.selectedCountryCode);
    console.log(this.selectedCityCode);

		this.dataImportsService.loadData(this.selectedCountryCode, this.selectedCityCode).then(result => {
			this.merchants = result;
		})
	}

  onClick() {
    this.msg = 'Welcome ' + this.text;
  }

  ngOnInit() { 
    this.menuItems = [ 
      { 
        label: 'HTML', 
        items: [ 
          { 
            label: 'HTML 1'
          }, 
          { 
            label: 'HTML 2'
          } 
        ] 
      }, 
      { 
        label: 'Angular', 
  
        items: [ 
          { 
            label: 'Angular 1'
          }, 
          { 
            label: 'Angular 2'
          } 
        ] 
      } 
    ]; 
  } 
}
