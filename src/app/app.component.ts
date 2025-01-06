import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { CommonModule } from '@angular/common';
import { AngularGoogleMapsComponent } from '../maps/maps.component';
import { ListboxModule } from 'primeng/listbox';
import { MenuItem, SelectItemGroup } from 'primeng/api';
import { SplitterModule } from 'primeng/splitter';
import { MenubarModule } from 'primeng/menubar';

import merchants from '../assets/RES_ES_GI.json';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';

interface Service {
  name: string;
  code: string;
}

interface City {
  name: string;
  code: string;
}

interface Country {
  name: string;
  code: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, InputTextModule, ButtonModule, MessageModule, FormsModule, AngularGoogleMapsComponent, ListboxModule, SplitterModule, MenubarModule, ScrollPanelModule, PanelModule, DropdownModule],
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

  countries: any[];
	selectedCountryCode = 'ES';
	selectedCountries: any[];

  merchants: any[];

  groupedCities: SelectItemGroup[];

	menuItems: MenuItem[] = [];

	desktop: boolean = true;

  constructor() {

		this.services = [
      { name: "Residencias", code: "RE" },
      { name: "Centros de Dia", code: "CD" },
      { name: "Asistencia a Mayores", code: "AM" },
      { name: "Asistencia a Domicilio", code: "AD" },
    ];

    this.countries = [
      { name: "Australia", code: "AU" },
      { name: "Brazil", code: "BR" },
      { name: "China", code: "CN" },
      { name: "Egypt", code: "EG" },
      { name: "España", code: "ES" },
      { name: "France", code: "FR" },
      { name: "Germany", code: "DE" },
      { name: "India", code: "IN" },
      { name: "Japan", code: "JP" },
      { name: "United States", code: "US" },
			{ name: "South Africa", code: "ZA"}, 
			{ name: "South Georgia and the South Sandwich Islands", code: "GS"}, 
			{ name: "Spain", code: "ES"}, 
			{ name: "Sri Lanka", code: "LK"}, 
			{ name: "Sudan", code: "SD"}, 
			{ name: "Suriname", code: "SR"}, 
			{ name: "Svalbard and Jan Mayen", code: "SJ"}, 
			{ name: "Swaziland", code: "SZ"}, 
			{ name: "Sweden", code: "SE"}, 
			{ name: "Switzerland", code: "CH"}, 
			{ name: "Syrian Arab Republic", code: "SY"}, 
			{ name: "Taiwan, Republic of China", code: "TW"}, 
			{ name: "Tajikistan", code: "TJ"}, 
			{ name: "Tanzania, United Republic of", code: "TZ"}, 
			{ name: "Thailand", code: "TH"}, 
			{ name: "Timor-Leste", code: "TL"},
			{ name: "Togo", code: "TG"}, 
			{ name: "Tokelau", code: "TK"}, 
			{ name: "Tonga", code: "TO"}, 
		];

    this.cities = [
      { name: "Oviedo", code: "OV" },
      { name: "Gijón", code: "GI" },
      { name: "Avilés", code: "AV" },
      { name: "Nava", code: "NA" },
      { name: "Luanco", code: "LU" }
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

		this.merchants = merchants;

		if (document.documentElement.clientWidth < 400) { // 768px portrait
			this.desktop = false;
		}
		console.log(document.documentElement.clientWidth)
		console.log(this.desktop)
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
