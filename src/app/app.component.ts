import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Empleado } from './empleado.model';


@Component({
  selector: 'app-root',
  imports: [FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Listado de Empleados';
  empleados:Empleado[]=[
    new Empleado("Juan","Perez","Presidente",7500),
    new Empleado("Luis","Guerra","Directora",5500),
    new Empleado("Ana","Lopez","Jefa Sección",3500),
    new Empleado("Lucía","García","Administrativo",2500),
  ];
}
