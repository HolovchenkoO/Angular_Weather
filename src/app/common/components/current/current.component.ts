import { Component, Input } from "@angular/core";
import { environment } from '@app-environment/environment';
import { City } from "src/app/common/services/interfaces/city.interface";
import { Current } from "src/app/common/services/interfaces/current.interface";

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent {
  @Input() current!: Current;
  @Input() city!: City;

  getDate(): Date { return new Date(this.current.dt * 1000); }

  getIconURL(): string { return environment.ICON_URL + this.current.weather[0].icon +'@4x.png'; }
}
