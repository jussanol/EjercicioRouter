import { Component, OnInit } from '@angular/core';
import { Raza, RAZATYPE } from '../raza.model';
import { RazasService } from '../razas.service';

@Component({
  selector: 'app-razas-list',
  templateUrl: './razas-list.component.html',
  styleUrls: ['./razas-list.component.css']
})
export class RazasListComponent implements OnInit {

  title = 'Razas de FullStack';
  listaRazas: Raza[] = [];
  RAZATYPE = RAZATYPE;

  constructor(
    private razasService: RazasService
  ) { }

  ngOnInit(): void {
    this.listaRazas = this.razasService.getRazas();
  }

}
