import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataImportsService {

	loadChildren (country: string, city: string) {
		if (country === 'ES' && city === 'GI')
			return import('../assets/ES_GI.json').then(m=> m.RES)
		else if (country === 'ES' && city === 'AV')
			return import('../assets/ES_AV.json').then(m=> m.RES)

		return import('../assets/ES_GI.json').then(m=> m.RES)
	} 

}