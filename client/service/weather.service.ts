import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class WeatherService {
    private city='Paris,fr';
    private name= 'weather'; // api name
    private key= '43ef9b54ffc67bb76d09b030a41956e5';

    label : any = 'paris'; // city name coming from the marker label
    lat : number;
    lon : number;

    // array holding : label number, label city name, label city temp

    constructor(private _http: Http) {
    }
    getWeather(){
        // url by geoloc api.openweathermap.org/data/2.5/weather?lat=35&lon=139
        return this._http.get('http://api.openweathermap.org/data/2.5/weather?q='+this.label+'&APPID='+this.key+'&units=metric')
                .map(res => res.json());
    }

    //http://api.openweathermap.org/data/2.5/weather?lat=46.835493&lon=6.416765&APPID=43ef9b54ffc67bb76d09b030a41956e5&units=metric

    getWeatherByGeo(){
        // url by geoloc api.openweathermap.org/data/2.5/weather?lat=35&lon=139
        var url =  'http://api.openweathermap.org/data/2.5/weather?lat='+this.lat+'&lon='+this.lon+'&APPID='+this.key+'&units=metric';

        return this._http.get( url )
                .map(res => res.json());

    }
}
