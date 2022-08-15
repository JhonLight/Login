import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tempo } from '../interfaces/tempo';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  constructor( private http: HttpClient) { }

  getClima(lat: string, lon: string){
    lat = '-25.455132'
    lon = '-49.179905'
    return this.http.get<Tempo>('https://api.openweathermap.org/data/2.5/weather?lat=' + lat +'&lon=' + lon +'&appid=bedbc530fea943c32482d7bbe0edaada')
  }
}
