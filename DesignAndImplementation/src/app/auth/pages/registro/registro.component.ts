import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  
  showPassword = false;  
  passwordTogggleicon = 'eye';
  us:any;
  name:string;
  username:any;
  password:any;
  dateregis:any;



  constructor(private authService: AuthService, private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
    this.usuario();
  }

  backLogin() {
    this.navCtrl.navigateBack('/auth/login');
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
    if (this.passwordTogggleicon == 'eye') {
      this.passwordTogggleicon = 'eye-off';
    } else {
      this.passwordTogggleicon = 'eye';
    } 
  }

 async usuario() {
    this.us = await this.authService.cargarUsuario();
    this.name = this.us.name.first + ' ' + this.us.name.last;
    this.username = this.us.login.username;
    this.password = this.us.login.password;
    const fecha = this.us.registered.date.substring(10, -1);
    this.dateregis = fecha;
 }

 async registrar() {
   const registro = await this.authService.registrarUsuario(this.username, this.password, this.name, this.dateregis);
   if (registro == 'success') {
     const user = {
       username: this.username,
       password: this.password
     };
    let navigationExtras: NavigationExtras = {
      state: {
        user: JSON.stringify(user)
      }
    }; 
     this.router.navigate(['/auth/login'], navigationExtras);
   }
 }

}
