import { Injectable } from '@angular/core';
import { Empleado } from "./empleado.model";
@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor() { }
  empleados:Empleado[]=[
    new Empleado("Juan","Perez","Presidente",7500),
    new Empleado("Luis","Guerra","Directora",5500),
    new Empleado("Ana","Lopez","Jefa Sección",3500),
    new Empleado("Lucía","García","Administrativo",2500),
  ];
  agregarEmpleadoServicio(miEmpleado:Empleado){
    this.empleados.push(miEmpleado);
  }
}
