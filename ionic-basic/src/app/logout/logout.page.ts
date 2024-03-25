import { Component, OnInit } from '@angular/core';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Router } from '@angular/router';
import { AuthFirebaseService } from '../service/auth-firebase.service';
import { MenuService } from '../service/menu.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
})
export class LogoutPage implements OnInit {
  isLogged: any = false;

  constructor(
    private router: Router,
    private authService: AuthFirebaseService,
    private menuService: MenuService,
  ) {
    onAuthStateChanged(this.authService.getStateAuth(), user => {
      if (user != null && user != undefined) {
        this.isLogged = true;
      }
    });
  }

  ngOnInit() {
  }

  onLogout() {
    signOut(this.authService.getStateAuth()).then(response => {
      alert("Se salió de sesión con éxito.");
      this.menuService.setTitle("login");
      this.router.navigateByUrl('/login');
    }).catch(error => {
      alert("Error al salir de sesión.");
    });
  }
}