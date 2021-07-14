import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  constructor( private http: HttpClient ) { }

  cargarUsuario() {
    return new Promise((resolve, rejects) => {
      const url = 'https://randomuser.me/api';
      this.http.get(url).subscribe((resp: any) => {
        const data = resp.results[0];
        resolve(data);
      });
    });
  }

  registrarUsuario(user:string, pass:any, name:string, dateregis:any) {
    return new Promise((resolve, rejects) => {
      const usuario = {
        nameuser: user,
        password: pass,
        name: name,
        dateregis: dateregis
      };
      localStorage.setItem('usuario', JSON.stringify(usuario));
      resolve('success');
    });
  }

  obternerUsuarioLocal() {
    return new Promise((resolve, rejects) => {
      const dataUsuario = JSON.parse(localStorage.getItem('usuario'));
      resolve(dataUsuario);
    });
  }

}
