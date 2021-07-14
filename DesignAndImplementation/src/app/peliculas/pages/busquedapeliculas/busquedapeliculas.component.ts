import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../../services/peliculas.service';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-busquedapeliculas',
  templateUrl: './busquedapeliculas.component.html',
  styleUrls: ['./busquedapeliculas.component.scss'],
})
export class BusquedapeliculasComponent implements OnInit {
  
  data:any = [];
  pelis:any = [];
  peliculas:any[] = [];
  genero:string = '';
  
  constructor(private peli: PeliculasService) { }

  ngOnInit() {
  }
  
  loadData(event) {
    setTimeout(() => {
      this.generoPeliculas();
      event.target.complete();
    }, 2000);
  }

  async generoPeliculas() {
    if (this.genero != '') {
      this.data = await this.peli.busquedaPeliculas(this.genero);
      const count = this.data.length - 1;
      this.data.forEach(resp => {
        if (resp.show.image != null ||  resp.show.image != undefined ||  resp.show.original != null) {
          this.pelis.push(resp.show);
        }
      });
      for (let i = 0; i < count; i++) {
        this.peliculas.push(this.pelis[i]);
      }
    }
  }

}
