import { Empleado } from "./empleado.model";

export class EmpleadosService{
    empleados:Empleado[]=[
        new Empleado("Juan","Perez","Presidente",7500),
        new Empleado("Luis","Guerra","Directora",5500),
        new Empleado("Ana","Lopez","Jefa Sección",3500),
        new Empleado("Lucía","García","Administrativo",2500),
      ];
      agregarEmpleadoServicio(empleado:Empleado){
        this.empleados.push(empleado);
      }
}