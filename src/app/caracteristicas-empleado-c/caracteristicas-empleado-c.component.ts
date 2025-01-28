import { Component, EventEmitter, Output, output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  imports: [],
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrl: './caracteristicas-empleado-c.component.css'
})
export class CaracteristicasEmpleadoCComponent {
  @Output() caracteristicasEmpleado=new EventEmitter<string>();
  //constructor(private miServicio:ServicioEmpleadosService){}
  agregarCaracteristicas(value:string){
    //this.miServicio.muestraMensaje(value);
    //this.caracteristicasEmpleado.emit(value);
  }
}
