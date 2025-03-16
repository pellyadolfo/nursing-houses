import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({ 
      theme: {
        preset: Aura
      }
    })
  ]
};

export const CODE = {
	"LEISURE_SELF_LIBRARY": "LI",										// Biblioteca
	"LEISURE_SELF_PRESS": "PR",											// Prensa Diaria
	"LEISURE_SELF_COMPUTER_ROOM": "CR",							// Coputer Room
	"LEISURE_SELF_CINEMA": "CI",										// Cinema
	"LEISURE_SELF_CHURCH": "CH",										// Iglesia
	"LEISURE_SELF_WIFI": "WI",											// WiFi
	"LEISURE_NATURE_GARDEN": "GA",									// Jardin			
	"LEISURE_NATURE_GREEN_HOUSE": "GH",							// Invernadero
	"LEISURE_NATURE_VEGETABLE_PATH": "VG",					// Huerto
	"LEISURE_EXERCISE_GYM": "GY",										// Gimnasio
	"LEISURE_EXERCISE_GYM_MONITOR": "GM",						// Monitor de Gimnasio
	"LEISURE_EXERCISE_SWIMMING_POOL": "SP",					// Piscina
	"LEISURE_SOCIALIZE_LIVING_ROOM": "LR",					// Sala de Estar y TV
	"LEISURE_SOCIALIZE_ACTIVITY_ROOM": "AR",				// Salas de Actividades
	"LEISURE_SOCIALIZE_COFEE_ROOM": "CR",						// Sala de Cafe
	"LEISURE_SOCIALIZE_GAMING_ROOM": "GR",					// Salon Recreativo
	"LEISURE_EXTERNAL_VISIT_ROOM": "VR",						// Sala de Visitas
	"LEISURE_EXTERNAL_PRIVATE_DINNING_ROOM": "DR"		// Comedor Privado
}