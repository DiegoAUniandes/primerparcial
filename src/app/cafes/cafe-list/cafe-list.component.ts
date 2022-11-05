import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})

export class CafeListComponent implements OnInit {

  cafes: Array<Cafe> = [];
  totalBlend: number = 0;
  totalOrigen: number = 0;

  constructor(private cafeService: CafeService) { }

  getCafes(): void {
    this.cafeService.getCafes().subscribe((cafes) => {
      this.cafes = cafes;
      this.calculateBlend(cafes);
      this.calculateOrigen(cafes);
    });
  }

  calculateBlend(listadoCafe : Array<Cafe>): void {
    listadoCafe.forEach( x => {
      if (x.tipo == "Blend"){
        this.totalBlend += 1;
      }
    })
  }

  calculateOrigen(listadoCafe : Array<Cafe>): void {
    listadoCafe.forEach( x => {
      if (x.tipo == "Café de Origen"){
        this.totalOrigen += 1;
      }
    })
  }


  ngOnInit() {
    this.getCafes();
  }

}
