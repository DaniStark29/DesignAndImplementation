import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculasRoutingModule } from './peliculas-routing.module';
import { FormsModule } from '@angular/forms';
import { ListapeliculasComponent } from './pages/listapeliculas/listapeliculas.component';
import { BusquedapeliculasComponent } from './pages/busquedapeliculas/busquedapeliculas.component';


@NgModule({
  declarations: [ListapeliculasComponent, BusquedapeliculasComponent],
  imports: [
    CommonModule,
    PeliculasRoutingModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PeliculasModule { }
