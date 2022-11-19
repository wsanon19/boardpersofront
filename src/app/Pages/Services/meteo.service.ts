import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Meteo } from '../Components/meteo/meteo';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {
  private host = environment.apiUrl;

  constructor(private http:HttpClient) { 
  }

  
    /**
     * getMeteo
 : Observable<>    */
 public getMeteo(): Observable<Meteo[]> {
  return this.http.get<Meteo[]>(`${this.host}/WeatherForecast`);
}

}
