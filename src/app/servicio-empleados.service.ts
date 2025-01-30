import { Injectable } from '@angular/core';
//Todos los servicios deben tener la sentencia @Injectable
@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadosService {

  constructor() { 
   
  }
  
  muestraMensaje(mensaje:string){
    alert(mensaje);
  }
}
