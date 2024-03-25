import { Component, OnInit } from '@angular/core';
import { AuthFirebaseService } from '../service/auth-firebase.service';
import { Router } from '@angular/router';
import { User } from '../interface/user';
import { MenuService } from '../service/menu.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
})
export class RegisterPage implements OnInit {

  user: User = new User();

  constructor(private menuService: MenuService,
    private router: Router,
    private autSvc: AuthFirebaseService) { }

  ngOnInit() {
  }

  async onRegister() {
    this.autSvc.onRegister(this.user).then(user => {
      if (user) {
        alert('Usuario creado con éxito.');
        this.menuService.setTitle("presupuesto");
        this.router.navigate(['/presupuesto']);
      }
    }).catch(error => {
      alert('Error al crear usuario.');
    })

  }
  onLogin() {
    this.menuService.setTitle("login");
    this.router.navigate(["/login"]);
  }

}