import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../shared/weather.service';
import { Observable } from 'rxjs';
import { WeatherDataObj } from '../shared/WeatherDataObj';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  zip: string;
  weatherData: Observable<WeatherDataObj>;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  getZip() {
    this.weatherData = this.weatherService.getWeather(this.zip);
  }
}
