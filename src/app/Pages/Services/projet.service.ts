import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Meteo} from "../Components/meteo/meteo";
import {Projet} from "../Components/projet/Projet";

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  private host = environment.apiUrl;

  constructor(private http:HttpClient) {
  }


  /**
   * geProjets
   : Observable<>    */
  public getProjets(): Observable<Projet[]> {
    return this.http.get<Projet[]>(`${this.host}/api/projet/list`);
  }

}
