import { Component } from "@angular/core";
import { SvgIconComponent } from "../../../shared/svg-icon/svg-icon.component";

@Component({
  selector: 'filters-panel',
  standalone: true,
  imports: [ SvgIconComponent ],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss'
})
export class FiltersComponent {

}