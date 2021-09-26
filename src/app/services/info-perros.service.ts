import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPerros } from '../interfaces/info-perros.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPerrosService {
  info: InfoPerros = {};
  cargada = false;
  constructor(private http: HttpClient) { 
    console.log("Servicio perros inicializado");
    this.http.get('assets/data/data-perro.json')
    .subscribe( (resp: InfoPerros) => {
      console.log(resp);
      this.cargada = true;
      this.info = resp;
      console.log(resp.nombre);
    })
  }
}
