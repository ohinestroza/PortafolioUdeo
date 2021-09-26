import { Component, OnInit } from '@angular/core';
import { InfoPerrosService } from 'src/app/services/info-perros.service';

@Component({
  selector: 'app-perros',
  templateUrl: './perros.component.html',
  styleUrls: ['./perros.component.css']
})
export class PerrosComponent implements OnInit {
  constructor(public _servicioPerros: InfoPerrosService) { } 
  arrPerros: any[] = [
    { imagen: 'assets/img/doberman.jpg', nombre: 'Doberman', edad: '4 años', sexo: 'Hembra', descripción: 'Castrada, color café', id:'1'},
    { imagen: 'assets/img/san-bernardo.jpg', nombre: 'San Bernardo', edad: '8 años', sexo: 'Macho', descripción: 'Amigable con los niños', id:'2'},
    { imagen: 'assets/img/pastor-aleman.jpg', nombre: 'Pastor Alemán', edad: '6 años', sexo: 'Macho', descripción: 'Castrado, inquieto', id:'3'},
    { imagen: 'assets/img/schnauzer.jpg', nombre: 'Schnauzer', edad: '2 años', sexo: 'Hembra', descripción: 'Castrada, no le gustan los niños', id:'4'},
    { imagen: 'assets/img/cocker.jpg', nombre: 'Cocker', edad: '7 meses', sexo: 'Macho', descripción: 'Miedosa, color beige', id:'5'},
    { imagen: 'assets/img/pomerania.jpg', nombre: 'Pomerania', edad: '13 años', sexo: 'Hembra', descripción: 'Asustadiza, castrada', id:'6'},]
  ngOnInit(): void {
  }
}
