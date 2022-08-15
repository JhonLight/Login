import { weather } from './../interfaces/tempo';
import { Component, OnInit } from '@angular/core';
import { Tempo } from '../interfaces/tempo';
import { ClimaService } from '../services/clima.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  tempo: Tempo = {
    weather:[ {
      id: 0,
      main: '',
      weatherDescription: '',
       icon: ''


  }],
    base: '',
    main: {
      temp: 0,
      feelsLike:0,
      tempMin: 0,
      tempMax: 0,
      pressure: 0,
      humidity: 0


  },
    visibility: 0,
    wind: undefined,
    clouds: undefined,
    dt: 0,
    sys:{
      type: 0,
      id: 0,
      country: '',
      sunrise: 0,
      sunset: 0,
  },
    timezone: 0,
    id: 0,
    name: '',
    cod: 0,
    hora: 0,

  }

  data1 = new Date('2022-04-23T10:00:00.000z');

  constructor( private clima: ClimaService) { }

  ngOnInit(): void {

    this.Contador()

    this.clima.getClima('', '').subscribe(
      sucesso => {
       /*  console.log(sucesso.weather[0].icon)
        console.log(sucesso.main.temp)
        console.log(sucesso.name) */
        this.tempo.weather[0].icon = '../../assets/icons/' + sucesso.weather[0].icon + '.png'
        this.tempo.main.temp = Math.round(sucesso.main.temp - 273.15)
        this.tempo.name = sucesso.name
        this.tempo.sys.country = sucesso.sys.country
        /* console.log(sucesso.sys.country)
        console.log( this.tempo.weather[0].icon ) */
      },
      erro => console.log(erro)
    )

  }

  Contador(): void{
    const teste = new Promise((resolve, reject) => {

        setTimeout(() => {
          const hora = new Date
          this.tempo.hora = hora.getTime()
          this.tempo.hora + 1000
          this.Contador()

        }, 1000);

    })
    /* console.log(this.tempo.hora) */
  }

}
