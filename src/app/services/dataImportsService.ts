import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataImportsService {

	loadData (country: string, city: string) {
		if (country === 'ES' && city === 'AV')
			return import('../../assets/data/ES_AV.json').then(m=> m)
		if (country === 'ES' && city === 'GO')
			return import('../../assets/data/ES_GO.json').then(m=> m)
		if (country === 'ES' && city === 'GI')
			return import('../../assets/data/ES_GI.json').then(m=> m)
		if (country === 'MX' && city === 'CV')
			return import('../../assets/data/MX_CV.json').then(m=> m)

		return import('../../assets/data/ES_GI.json').then(m=> m)
	} 

}