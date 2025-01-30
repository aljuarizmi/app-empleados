import { Component, Input } from '@angular/core';
import { Empleado } from '../empleado.model';
import { CaracteristicasEmpleadoCComponent } from "../caracteristicas-empleado-c/caracteristicas-empleado-c.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empleado-hijo-c',
  imports: [CaracteristicasEmpleadoCComponent, CommonModule],
  templateUrl: './empleado-hijo-c.component.html',
  styleUrl: './empleado-hijo-c.component.css'
})
export class EmpleadoHijoCComponent {
//@Input() empleadoDeLista:Empleado;
//@Input() indice:number;
//El decorador @Input() se usa en componentes o directivas para recibir datos desde un componente padre. 
//Permite la comunicación de datos unidireccional (de padre a hijo).
  @Input()empleadoDeLista!: Empleado;
  @Input()indice!: number;
  arrayCaracteristicas = [''];

  agregarCaracteristica(nuevaCaracteristica: string) {
    this.arrayCaracteristicas.push(nuevaCaracteristica);

  }
}
