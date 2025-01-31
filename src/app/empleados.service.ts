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
  actualizarEmpleadoServicio(indice:number,miEmpleado:Empleado){
    this.servicioVentanaEmergente.muestraMensaje("Persona que se va a actualizar:\n"+miEmpleado.nombre+"\nSalario: "+miEmpleado.salario);
    let empleadoModificado=this.empleados[indice];
    empleadoModificado.nombre=miEmpleado.nombre;
    empleadoModificado.apellido=miEmpleado.apellido;
    empleadoModificado.cargo=miEmpleado.cargo;
    empleadoModificado.salario=miEmpleado.salario;
  }
  eliminarEmpleadoServicio(indice:number){
    this.empleados.splice(indice,1);
  }
  encontrarEmpleado(indice:number){
    let empleado:Empleado=this.empleados[indice];
    return empleado
  }
}
