import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Capitan America';
  arreglo:any[] = [1,2,3,4,5,6,7,8,9,10];
  PI = Math.PI;
  porcentaje = 0.234;
  salario = 123;
  fecha:Date = new Date();
  
  valorPromesa = of('Data in promise')

  heroe = {
    nombre:'Logan',
    clave:'Wolwerine',
    edad:500,
    direccion: {
      calle:'Avenida Siempre Viva',
      casa:20
    }
  }
  
} 
