import {Injectable} from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from '@app-environment/environment';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Hourly} from "@app-common/services/interfaces/hourly.interface";
import {City} from "@app-common/services/interfaces/city.interface";
import {Current} from "@app-common/services/interfaces/current.interface";


@Injectable()
export class WeatherService {

  constructor(private readonly httpClient: HttpClient) {

  }

  getCurrentWeather(city: City): Observable<Current> {
    return this.httpClient.get([environment.API_URL, '/data/2.5/onecall'].join('')
      , {params: {lat: city.lat, lon: city.lon, units: 'metric', lang: 'ru', APIKey: environment.APIKey}})
      .pipe(map((r: any)=>r.current));
  }
  getHourlyForecast (city: City): Observable<Hourly[]>{
    return this.httpClient.get([environment.API_URL, '/data/2.5/onecall'].join('')
      , {params: {lat: city.lat, lon: city.lon, units: 'metric', lang: 'ru', APIKey: environment.APIKey}})
      .pipe(map((r: any)=>r.hourly));
  }
}

