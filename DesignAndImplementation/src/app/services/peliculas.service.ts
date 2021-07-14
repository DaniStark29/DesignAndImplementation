import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor( private http: HttpClient ) { }

  obtenerPeliculas() {
    return new Promise((resolve, rejects) => {
      const url = 'https://api.tvmaze.com/schedule/full';
      this.http.get(url).subscribe((resp: any) => {
        const data = resp;
        resolve(data);
      });
    });
  }

  busquedaPeliculas(genero:string) {
    return new Promise((resolve, rejects) => {
      if (genero != '') {
        const url = `https://api.tvmaze.com/search/shows?q=${genero}`;
        this.http.get(url).subscribe((resp: any) => {
          const data = resp;
          resolve(data);
        });
      }
    });
  }

}
