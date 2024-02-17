import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Alumno } from 'src/app/interface/alumno';

@Component({
  selector: 'app-tabla-alumnos',
  templateUrl: './tabla-alumnos.component.html'
})
export class TablaAlumnosComponent implements OnInit {

  @Input() alumnosList: Alumno[] = [];
  @Output() eliminar: any = new EventEmitter<Alumno>();
  @Output() editar:  any = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {}

}