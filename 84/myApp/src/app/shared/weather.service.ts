import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { WeatherDataObj } from './WeatherDataObj';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weatherPackage: WeatherDataObj;

  constructor(private httpClient: HttpClient) { }

  getWeather(zip: string, weatherType: string = 'imperial') {
    // zip = '08701';
    return this.httpClient.get<any>(`
    https://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=${weatherType}&APPID=b6a9e1ebdce0d01a382553d44d3d8765
    `)
      .pipe(map(data => (
        this.weatherPackage = {
          name: data.name,
          humidity: data.main.humidity,
          temp: data.main.temp,
          windspeed: data.wind.speed,
          conditions: data.weather[0].main,
          description: data.weather[0].description,
          coords: data.coord
        }
      )
      ));
  }
}
