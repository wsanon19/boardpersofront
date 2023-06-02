import { Component, OnInit } from '@angular/core';
import {Meteo} from "../meteo/meteo";
import {MeteoService} from "../../Services/meteo.service";
import {ProjetService} from "../../Services/projet.service";
import {Projet} from "./Projet";

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {

  public listProjet!: Projet[] ;

  constructor(private projetService: ProjetService ) {

  }

  ngOnInit(): void {
    this.getProjet();
  }

  public getProjet() : void {
    this.projetService.getProjets().subscribe(
      (response: Projet[]) => {
        console.warn(response);
        this.listProjet = response;}
    )
  }

}
