import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { Empleado } from '../empleado.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proyectos-component',
  imports: [FormsModule,CommonModule],
  templateUrl: './proyectos-component.component.html',
  styleUrl: './proyectos-component.component.css'
})
export class ProyectosComponentComponent {
constructor(private router:Router,private miServicio:ServicioEmpleadosService,private empleadosService:EmpleadosService){
  this.empleados=this.empleadosService.empleados;
}
empleados:Empleado[]=[];
  volverHome(){
  this.router.navigate(['Home']);
  }
  agregarEmpleado(eventNombre:HTMLInputElement,eventApellido:HTMLInputElement,eventCargo:HTMLInputElement,eventSalario:HTMLInputElement){
      let miEmpleado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
      //this.miServicio.muestraMensaje("Nombre del Empleado: "+miEmpleado.nombre)
      //this.empleados.push(miEmpleado);
      this.empleadosService.agregarEmpleadoServicio(miEmpleado);
      this.router.navigate(['Home']);
      //eventNombre.value="";
      //eventApellido.value="";
      //eventCargo.value="";
      //eventSalario.value="";
      //eventNombre.focus();
    }
    cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;
}
