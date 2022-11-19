import { Component, OnInit } from '@angular/core';
import { MeteoService } from '../../Services/meteo.service';
import { Meteo } from './meteo';


@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent implements OnInit {

  cheminImage:any = "pngegg.png";

  public listMeteo!: Meteo[] ;

  constructor(private meteoService: MeteoService) {

   }

  ngOnInit(): void {
    this.getMeteo();
  }

  public getMeteo() : void {
    this.meteoService.getMeteo().subscribe(
      (response: Meteo[]) => {
        console.warn(response);
        this.listMeteo = response;}
    )
    
  }

}
