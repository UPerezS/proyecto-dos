import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { DetalleAlumnoComponent } from './components/detalle-alumno/detalle-alumno.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderNavegationComponent } from './core/header-navegation/header-navegation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaAlumnosComponent,
    DetalleAlumnoComponent,
    HeaderNavegationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
