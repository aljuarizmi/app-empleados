import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Empleado } from './empleado.model';
import { EmpleadoHijoCComponent } from "./empleado-hijo-c/empleado-hijo-c.component";


@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule, EmpleadoHijoCComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  titulo = 'Listado de Empleados';
  empleados:Empleado[]=[
    new Empleado("Juan","Perez","Presidente",7500),
    new Empleado("Luis","Guerra","Directora",5500),
    new Empleado("Ana","Lopez","Jefa Sección",3500),
    new Empleado("Lucía","García","Administrativo",2500),
  ];
  agregarEmpleado(){
    let miEmpleado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    this.empleados.push(miEmpleado);
  }
  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;
}
