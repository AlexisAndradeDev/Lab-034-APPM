import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/interface/menu';

@Component({
  selector: 'app-float-menu',
  templateUrl: './float-menu.component.html',
})
export class FloatMenuComponent implements OnInit {

  private router: Router;

  menuData: Menu[] = [
    {
      nombre: 'Home', enlace: '/home',
      icono: 'home-outline'
    },
    {
      nombre: 'Alumnos', enlace: '/alumnos',
      icono: 'school-outline'
    },
    {
      nombre: 'Recetas', enlace: '/receta',
      icono: 'restaurant-outline'
    },
    {
      nombre: 'Presupuesto', enlace: '/presupuesto',
      icono: 'cash-outline'
    },
    {
      nombre: 'Inicio', enlace: '/inicio',
      icono: 'navigate-outline'
    },
    {
      nombre: 'Tabs', enlace: '/tabs',
      icono: 'folder-outline'
    }
  ];

  constructor(private routeador: Router) {
    this.router = routeador;
  }

  ngOnInit() { }

  navegar(link: string) {
    this.router.navigate([link]);
  }

}