import { Component, OnInit } from '@angular/core';
import { Alumno } from '../interface/alumno';
import { AlumnosService } from '../service/alumnos.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
})
export class AlumnosPage implements OnInit {
  alumnos: Alumno[] = [];
  nombre: string = '';
  matricula: string = '';
  estado: string = '';
  id: any;
  error: boolean = false;

  constructor(private alumnosService: AlumnosService) { }

  ngOnInit() {
    this.alumnosService.setAlumnos([
      {
        id: 1, nombre: 'Alexis Martínez', matricula: '135467',
      },
      {
        id: 2, nombre: 'Rodrigo García', matricula: '124568',
      },
      {
        id: 3, nombre: 'Lucas López', matricula: '154789',
      },
    ])

    this.alumnos = this.alumnosService.getAlumnos();
    this.estado = 'guardar';
  }

  public guardar() {
    let isStrUndefinedAndEmpty = (str_: string) => {
      return str_ == undefined || str_ == '';
    }

    const isNameNotValid = isStrUndefinedAndEmpty(this.nombre);
    const isMatriculaNotValid = isStrUndefinedAndEmpty(this.matricula);

    if (isNameNotValid || isMatriculaNotValid)
    {
      this.error = true;
      return;
    }

    let alumno: Alumno = {
      nombre: this.nombre,
      matricula: this.matricula
    };

    if (this.estado === 'actualizar') {
      alumno.id = this.id;
      this.alumnos = this.alumnosService.actualizarAlumno(alumno);
    }
    if (this.estado === 'guardar') {
      this.alumnosService.agregarAlumno(alumno);
      this.alumnos = this.alumnosService.getAlumnos();
    }
    this.cancelar();
  }

  public cancelar() {
    this.estado = 'guardar';
    this.matricula = '';
    this.nombre = '';
    this.error = false;
  }

  public eliminar(id: number) {
    this.alumnosService.borrarAlumno(id);
    this.alumnos = this.alumnosService.getAlumnos();
  }

  public editar(alumno: Alumno) {
    this.estado = 'actualizar';
    this.matricula = alumno.matricula;
    this.nombre = alumno.nombre;
    this.id = alumno.id;
  }
}
