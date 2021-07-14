import { Component, Input } from "@angular/core";
import { environment } from '@app-environment/environment';
import { Hourly } from "src/app/common/services/interfaces/hourly.interface";

@Component({
  selector: 'app-hourly',
  templateUrl: './hourly.component.html',
  styleUrls: ['./hourly.component.css']
})
export class HourlyComponent {
  @Input() hourly!: Hourly;

  getDate(): Date { return new Date(this.hourly.dt * 1000); }

  getIconURL(): string { return environment.ICON_URL + this.hourly.weather[0].icon +'@2x.png'; }
}
