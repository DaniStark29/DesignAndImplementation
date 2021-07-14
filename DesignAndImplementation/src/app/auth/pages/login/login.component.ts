import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { NotiService } from '../../../services/noti.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  
  showPassword = false;  
  passwordTogggleicon = 'eye';
  data: any = '';
  username: string = "";
  password: any;
  usuario: any;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private auth: AuthService, 
    private noti: NotiService, 
  ) {  }

  ngOnInit() {
    this.obtenerUsuario();
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
    if (this.passwordTogggleicon == 'eye') {
      this.passwordTogggleicon = 'eye-off';
    } else {
      this.passwordTogggleicon = 'eye';
    } 
  }

  obtenerUsuario() {
    this.route.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = JSON.parse(this.router.getCurrentNavigation().extras.state.user);
        this.username = this.data.username;
        this.password = this.data.password;
      }
    });
  }

  async login(){
    this.usuario = await this.auth.obternerUsuarioLocal();
    if (this.usuario.nameuser == this.username && this.usuario.password == this.password) {
      this.router.navigateByUrl("/movie/listapeliculas");
      this.noti.noti("Bienvenido a LISTMOVI");
    } else {
      this.noti.noti("Usuario o contraseña incorrecto");
    }
  }
}
