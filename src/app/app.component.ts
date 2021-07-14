import {Component, OnInit, Output, SimpleChanges} from '@angular/core';
import {WeatherService} from "./common/services/weather.service";
import {Observable} from "rxjs";
import { City } from "src/app/common/services/interfaces/city.interface";
import { Hourly } from "src/app/common/services/interfaces/hourly.interface";
import { Current } from './common/services/interfaces/current.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Weather';
  city: City = {name: 'Kiev, ua', lat: 50.27, lon: 30.30};
  current$!: Observable<Current>;
  hourly$!: Observable<Hourly[]>;

  constructor(private readonly WeatherService: WeatherService) {

  }


  ngOnInit(): void {
    this.current$ = this.WeatherService.getCurrentWeather(this.city);
    this.hourly$ = this.WeatherService.getHourlyForecast(this.city);

  }

}
