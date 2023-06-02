import { Component, OnInit } from '@angular/core';
import { MeteoService } from '../../Services/meteo.service';
import { Meteo } from './meteo';


@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent implements OnInit {

  myDate: Date;

  cheminImage:any = "pngegg.png";

  public listMeteo!: Meteo[] ;

  constructor(private meteoService: MeteoService) {
    this.myDate = new Date();

   }

  ngOnInit(): void {
    // this.getMeteo();
    setInterval( () => {
      this.myDate = new Date();
    }, 1000);
  }

  public getMeteo() : void {
    this.meteoService.getMeteo().subscribe(
      (response: Meteo[]) => {
        console.warn(response);
        this.listMeteo = response;}
    )

  }

}
