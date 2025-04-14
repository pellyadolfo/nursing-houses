import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
	templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
	standalone: true,
  imports: [ HeaderComponent, FooterComponent, RouterModule, ],
})
export class AppComponent {

	menuItems: MenuItem[] = [];

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
