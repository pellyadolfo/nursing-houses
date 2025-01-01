import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { CommonModule } from '@angular/common';
import { AngularGoogleMapsComponent } from '../angular-google-maps/angular-google-maps.component';
import { ListboxModule } from 'primeng/listbox';
import { MenuItem, SelectItemGroup } from 'primeng/api';
import { SplitterModule } from 'primeng/splitter';
import { MenubarModule } from 'primeng/menubar';

import cityList from '../assets/cities.json';

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
  imports: [CommonModule, RouterOutlet, InputTextModule, ButtonModule, MessageModule, FormsModule, AngularGoogleMapsComponent, ListboxModule, SplitterModule, MenubarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  text = '';
  msg = '';

  cities: City[];

  countries: any[];

  cityList: any[];

	//selectedCity: City;
	selectedCountries: any[];

  groupedCities: SelectItemGroup[];

	menuItems: MenuItem[] = [];

  constructor() {
    this.cities = [
      { name: "New York", code: "NY" },
      { name: "Rome", code: "RM" },
      { name: "London", code: "LDN" },
      { name: "Istanbul", code: "IST" },
      { name: "Paris", code: "PRS" }
    ];

    this.countries = [
      { name: "Australia", code: "AU" },
      { name: "Brazil", code: "BR" },
      { name: "China", code: "CN" },
      { name: "Egypt", code: "EG" },
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

		this.cityList = cityList;
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
