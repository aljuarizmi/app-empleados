import { Component, EventEmitter, Output, output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  imports: [],
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrl: './caracteristicas-empleado-c.component.css'
})
export class CaracteristicasEmpleadoCComponent {
  //@Output() es un decorador que se usa en componentes hijos para enviar eventos al componente padre
  //Esto permite la comunicación de datos en sentido inverso: del hijo al padre.
  @Output() caracteristicasEmpleado=new EventEmitter<string>();
  //constructor(private miServicio:ServicioEmpleadosService){}
  agregarCaracteristicas(value:string,event:HTMLInputElement){
    //this.miServicio.muestraMensaje(value);
    this.caracteristicasEmpleado.emit(value);
    event.value="";
  }
}
