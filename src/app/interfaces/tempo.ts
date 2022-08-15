// This file was generated from JSON Schema using quicktype, do not modify it directly.
// To parse the JSON, add this file to your project and do:
//
//   let welcome = try? newJSONDecoder().decode(Welcome.self, from: jsonData)



// MARK: - Welcome
 export interface Tempo {

     weather: weather[],
     base: string,
     main: main,
     visibility: number,
     wind: wind,
     clouds: clouds,
     dt: number,
     sys: sys,
     timezone: number,
     id: number,
     name: string,
     cod: number,
     hora: number,

}

// MARK: - Clouds
export interface clouds  {
    all: number
}


// MARK: - Main
export interface main {
    temp: number,
    feelsLike: number,
    tempMin: number,
    tempMax: number,
    pressure: number,
    humidity: number


}

// MARK: - Sys
export interface sys {
    type: number,
    id: number,
    country: string,
    sunrise: number,
    sunset: number,
}

// MARK: - Weather
export interface weather {
    id: number,
    main: string,
    weatherDescription: string,
     icon: string


}

// MARK: - Wind
export interface wind {
    speed: number,
    deg: number,
}
