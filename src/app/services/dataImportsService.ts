import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataImportsService {

	loadData (country: string, city: string) {
		return import('../../assets/data/' + country + '_' + city + '.json').then(m=> m)
	} 

}