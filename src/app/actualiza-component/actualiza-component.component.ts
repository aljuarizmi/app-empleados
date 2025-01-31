import { Component } from '@angular/core';
import { Empleado } from '../empleado.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-actualiza-component',
  imports: [FormsModule],
  templateUrl: './actualiza-component.component.html',
  styleUrl: './actualiza-component.component.css'
})
export class ActualizaComponentComponent {
  constructor(private router:Router,private miServicio:ServicioEmpleadosService,private empleadosService:EmpleadosService, private route:ActivatedRoute){
    this.empleados=this.empleadosService.empleados;
    this.indice=this.route.snapshot.params['id'];
    let empleado:Empleado=this.empleadosService.encontrarEmpleado(this.indice);
    this.cuadroNombre=empleado.nombre;
    this.cuadroApellido=empleado.apellido;
    this.cuadroCargo=empleado.cargo;
    this.cuadroSalario=empleado.salario;
  }
  empleados:Empleado[]=[];
  actualizarEmpleado(eventNombre:HTMLInputElement,eventApellido:HTMLInputElement,eventCargo:HTMLInputElement,eventSalario:HTMLInputElement){
    let miEmpleado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    this.empleadosService.actualizarEmpleadoServicio(this.indice,miEmpleado);
    this.router.navigate(['Home']);
  }
  eliminarEmpleado(eventNombre:HTMLInputElement,eventApellido:HTMLInputElement,eventCargo:HTMLInputElement,eventSalario:HTMLInputElement){
    this.empleadosService.eliminarEmpleadoServicio(this.indice);
    this.router.navigate(['Home']);
  }
  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;
  indice:number=0;
}
