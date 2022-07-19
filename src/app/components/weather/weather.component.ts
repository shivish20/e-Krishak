import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather/weather.service';
import { WeatherData } from 'src/app/model/weather.model';
import { Pipe } from '@angular/core';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']

})
export class WeatherComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  cityName: string = 'Pune';
  weatherData?: WeatherData;

  ngOnInit(): void {
  this.getWeatherData(this.cityName);
  this.cityName = '';
  }

  onSubmit() {
  this.getWeatherData(this.cityName);
  this.cityName = '';
  }

  private getWeatherData(cityName: string) {
  this.weatherService.getWeatherData(cityName)
  .subscribe({
      next: (response) => {
      this.weatherData = response;
      console.log(response);
      }
  });
  }

}
