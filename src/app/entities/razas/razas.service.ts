import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Raza, RAZATYPE } from './raza.model';

@Injectable({
  providedIn: 'root'
})
export class RazasService {

  private razas: Raza[] = [];

  constructor(private http: HttpClient) { }

  public getRazas(): Observable<Raza[]> {
    const urlEndPoint = "http://localhost:8080/api/razas";
    return this.http.get<Raza[]>(urlEndPoint);
  }

  public getRaza(idRaza: number): Observable<Raza> {
    // for (let i = 0; i < this.razas.length; i++) {
    //   if (this.razas[i].id == idRaza) {
    //     return this.razas[i];
    //   }
    // }
    // return undefined;
    const urlEndPoint = "http://localhost:8080/api/razas/" + idRaza;
    return this.http.get<Raza>(urlEndPoint);
  }
}
