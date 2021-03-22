import { Component, Input, OnInit } from '@angular/core';
import { Raza, RAZATYPE } from '../raza.model';

@Component({
  selector: 'app-raza-item',
  templateUrl: './raza-item.component.html',
  styleUrls: ['./raza-item.component.css']
})
export class RazaItemComponent implements OnInit {

  @Input() raza!: Raza;
  RAZATYPE = RAZATYPE;

  constructor() { }

  ngOnInit(): void {
  }

}
