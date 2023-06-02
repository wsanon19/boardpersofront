import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;



   constructor(private observer: BreakpointObserver) {}

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

   ngAfterViewInit() {
     this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
       if (res.matches) {
         this.sidenav.mode = 'over';
         this.sidenav.close();
       } else {
         this.sidenav.mode = 'side';
         this.sidenav.open();
       }
     });
   }

  ngOnInit(): void {
  }

}
