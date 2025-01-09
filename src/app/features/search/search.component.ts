import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { AngularGoogleMapsComponent } from './maps/maps.component';
import { ListboxModule } from 'primeng/listbox';
import { SplitterModule } from 'primeng/splitter';
import { MenubarModule } from 'primeng/menubar';

import merchants_ES_GI from '../../../assets/ES_GI.json';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { PanelModule } from 'primeng/panel';
import { DataImportsService } from '../../services/dataImportsService';
import { FiltersComponent } from './filters/filters.component';
import { SelectorsComponent } from './selectors/selectors.component';

interface Coords {
	lat: number;
  lng: number;
	zoom: number;
}

@Component({
  selector: 'search-page',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
	standalone: true,
  imports: [CommonModule, RouterOutlet, InputTextModule, AngularGoogleMapsComponent, ListboxModule, SplitterModule, MenubarModule, ScrollPanelModule, PanelModule, FiltersComponent, SelectorsComponent],
})
export class SearchPage {

	@ViewChild(SelectorsComponent) selectors!: SelectorsComponent;

  merchants: any[];
  coords: Coords;

	desktop: boolean = true;

  constructor(private dataImportsService: DataImportsService) {

		if (document.documentElement.clientWidth < 400) {
			this.desktop = false;
		}

		this.merchants = merchants_ES_GI.RES;
		this.coords = merchants_ES_GI.coords;
	}

	onChange(change: boolean) {
    console.log(this.selectors.selectedCountryCode);
    console.log(this.selectors.selectedCityCode);

		this.dataImportsService.loadData(this.selectors.selectedCountryCode, this.selectors.selectedCityCode).then(result => {

			if (this.selectors.selectedServiceCode === 'RE')
				this.merchants = result.RES;
			else if (this.selectors.selectedServiceCode === 'CD')
				this.merchants = result.CD;

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
