import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListapeliculasComponent } from './pages/listapeliculas/listapeliculas.component';
import { ModalpeliculasComponent } from './pages/modalpeliculas/modalpeliculas.component';
import { BusquedapeliculasComponent } from './pages/busquedapeliculas/busquedapeliculas.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'listapeliculas', component: ListapeliculasComponent },
      { path: 'modalpeliculas', component: ModalpeliculasComponent },
      { path: 'busquedapeliculas', component: BusquedapeliculasComponent },
      { path: '**', redirectTo: 'login' },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculasRoutingModule { }
