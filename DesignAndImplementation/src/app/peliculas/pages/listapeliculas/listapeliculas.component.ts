import { Component, OnInit, ViewChild } from '@angular/core';
import { PeliculasService } from '../../../services/peliculas.service';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-listapeliculas',
  templateUrl: './listapeliculas.component.html',
  styleUrls: ['./listapeliculas.component.scss'],
})
export class ListapeliculasComponent implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  
  data:any = [];
  pelis:any = [];
  peliculas:any[] = [];
  constructor( private peli: PeliculasService ) { }

  ngOnInit() {
    this.cargarPeliculas();
    // this.generoPeliculas();
  }
  
  loadData(event) {
    setTimeout(() => {
      this.cargarPeliculas();
      event.target.complete();
    }, 2000);
  }
  
  async cargarPeliculas() {
    this.data = await this.peli.obtenerPeliculas();
    this.data.forEach(resp => {
      if (resp._embedded.show.image != null) {
        this.pelis.push(resp._embedded);
      }
    });
    for (let i = 0; i < 100; i++) {
      this.peliculas.push(this.pelis[i]);
    }
  }

}
