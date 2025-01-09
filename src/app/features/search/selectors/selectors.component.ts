import { Component, EventEmitter, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SelectChangeEvent, SelectModule } from "primeng/select";

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
  selector: 'selectors-panel',
  standalone: true,
  imports: [FormsModule, SelectModule, SelectorsComponent],
  templateUrl: './selectors.component.html',
  styleUrl: './selectors.component.scss'
})
export class SelectorsComponent {

	@Output() onChangeEvent = new EventEmitter<boolean>();

	services: Service[];
	selectedServiceCode = 'RE';

  cities: City[];
	selectedCityCode = 'GI';

  countries: Country[];
	selectedCountryCode = 'ES';

	constructor() {

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
	}

	onChange(event: SelectChangeEvent) {
    console.log("on change in child");
    console.log(this.selectedCountryCode);
    console.log(this.selectedCityCode);
    console.log(this.selectedCountryCode);
    console.log(this.selectedCityCode);

		this.onChangeEvent.emit(true);
	}
}
