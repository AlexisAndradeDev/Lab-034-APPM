import { Component, OnInit } from '@angular/core';
import { User } from '../interface/user';
import { AuthFirebaseService } from '../service/auth-firebase.service';
import { Router } from '@angular/router';
import { MenuService } from '../service/menu.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
})
export class LoginPage implements OnInit {

  user: User = new User();

  constructor(
    private router: Router,
    private autSvc: AuthFirebaseService,
    private menuService: MenuService
  ) { }

  ngOnInit() {
  }

  async onLogin() {
    this.autSvc.onLogin(this.user).then((user: any) => {
      if (user != null && user.code == undefined) {
        alert('Se inició sesión con éxito.');
        this.menuService.setTitle("presupuesto");
        this.router.navigate(['/tabs/presupuesto']);
      }
      else {
        if (user.code) {
          if (user.code == 'auth/wrong-password' || user.code == 'auth/invalid-email' || user.code == 'auth/argument-error') {
            alert("Error al iniciar sesión. Contraseña incorrecta o correo inválido.");
          }
        }
      }
    }).catch((error: any) => {
      alert("Error al iniciar sesión. Revise su contraseña o correo.");
      console.error(error);
    })

  }


  onRegister() {
    this.menuService.setTitle("register")
    this.router.navigate(['/register']);
  }

}