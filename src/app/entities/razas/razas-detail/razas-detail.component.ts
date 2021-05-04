import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Raza, RAZATYPE } from '../raza.model';
import { RazasService } from '../razas.service';

@Component({
  selector: 'app-razas-detail',
  templateUrl: './razas-detail.component.html',
  styleUrls: ['./razas-detail.component.css']
})
export class RazasDetailComponent implements OnInit {

  public idRaza: number;
  public error: string = "";
  public raza!: Raza;
  RAZATYPE = RAZATYPE;

  constructor(private router: ActivatedRoute, private razaService: RazasService) {
    this.idRaza = this.router.snapshot.params.idRaza;
    alert(this.idRaza);
    //this.raza = <Raza>this.razaService.getRaza(this.idRaza);
    this.razaService.getRaza(this.idRaza).subscribe(raza => this.raza = raza);
  }

  ngOnInit(): void {
  }

}
