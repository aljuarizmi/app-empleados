import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  imports: [],
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrl: './caracteristicas-empleado-c.component.css'
})
export class CaracteristicasEmpleadoCComponent {
  @Output() caracteristicasEmpleado=new EventEmitter<string>();
  agregarCaracteristicas(value:string){
    this.caracteristicasEmpleado.emit(value);
  }
}
