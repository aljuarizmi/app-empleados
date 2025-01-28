import { Injectable } from '@angular/core';
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from './servicio-empleados.service';
@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private servicioVentanaEmergente: ServicioEmpleadosService) { 

  }
  empleados:Empleado[]=[
    new Empleado("Juan","Perez","Presidente",7500),
    new Empleado("Luis","Guerra","Directora",5500),
    new Empleado("Ana","Lopez","Jefa Sección",3500),
    new Empleado("Lucía","García","Administrativo",2500),
  ];
  agregarEmpleadoServicio(miEmpleado:Empleado){
    this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregar:\n"+miEmpleado.nombre+"\nSalario: "+miEmpleado.salario);
    this.empleados.push(miEmpleado);
  }
}
