import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
//import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Empleado } from '../empleado.model';
 import { EmpleadoHijoCComponent } from "../empleado-hijo-c/empleado-hijo-c.component";
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';
//import { HomeComponentComponent } from '../home-component/home-component.component';
 import { QuienesComponentComponent } from '../quienes-component/quienes-component.component';
 import { ProyectosComponentComponent } from '../proyectos-component/proyectos-component.component';
 import { ContactoComponentComponent } from '../contacto-component/contacto-component.component';
 import { RouterModule,RouterOutlet, Routes } from '@angular/router';
//import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home-component',
  imports: [FormsModule, CommonModule, EmpleadoHijoCComponent,HomeComponentComponent,QuienesComponentComponent,ProyectosComponentComponent,ContactoComponentComponent,RouterModule,RouterOutlet],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponentComponent {
  titulo = 'Listado de Empleados';
  constructor(private miServicio:ServicioEmpleadosService,private empleadosService:EmpleadosService){
    this.empleados=this.empleadosService.empleados;
  }
  empleados:Empleado[]=[];
  agregarEmpleado(eventNombre:HTMLInputElement,eventApellido:HTMLInputElement,eventCargo:HTMLInputElement,eventSalario:HTMLInputElement){
    let miEmpleado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    //this.miServicio.muestraMensaje("Nombre del Empleado: "+miEmpleado.nombre)
    //this.empleados.push(miEmpleado);
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);
    eventNombre.value="";
    eventApellido.value="";
    eventCargo.value="";
    eventSalario.value="";
    eventNombre.focus();
  }
  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;
}
