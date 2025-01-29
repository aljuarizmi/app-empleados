import { Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';

export const routes: Routes = [
    {path:'Home',component:HomeComponentComponent},
      {path:'Proyectos',component:ProyectosComponentComponent},
      {path:'Quienes',component:QuienesComponentComponent},
      {path:'Contacto',component:ContactoComponentComponent}
];
