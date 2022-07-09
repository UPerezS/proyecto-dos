import { DetalleAlumnoComponent } from './components/detalle-alumno/detalle-alumno.component';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path:'',component:HomeComponent},
{ path:'home',component:HomeComponent},
{ path:'lista-alumnos',component:ListaAlumnosComponent},
{ path:'detalle-alumno',component:DetalleAlumnoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
