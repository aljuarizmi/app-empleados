import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Empleado } from './empleado.model';
import { EmpleadoHijoCComponent } from "./empleado-hijo-c/empleado-hijo-c.component";
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleados.service';


@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule, EmpleadoHijoCComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
    titulo = 'Listado de Empleados';
     constructor(private miServicio:ServicioEmpleadosService,private empleadosService:EmpleadosService){
       this.empleados=this.empleadosService.empleados;
     }
     /*constructor(private empleadosService:EmpleadosService){
      this.empleados=this.empleadosService.empleados;
     }*/
     empleados:Empleado[]=[];
    /*empleados:Empleado[]=[
      new Empleado("Juan","Perez","Presidente",7500),
      new Empleado("Luis","Guerra","Directora",5500),
      new Empleado("Ana","Lopez","Jefa Sección",3500),
      new Empleado("Lucía","García","Administrativo",2500),
    ];*/
  // ngOnInit(): void {
  //   //throw new Error('Method not implemented.');
  //   this.empleados=this.empleadosService.empleados;
  // }
    //empleados:Empleado[]=[];
  agregarEmpleado(){
    let miEmpleado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    this.miServicio.muestraMensaje("Nombre del Empleado: "+miEmpleado.nombre)
    //this.empleados.push(miEmpleado);
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);
  }
  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;
}
