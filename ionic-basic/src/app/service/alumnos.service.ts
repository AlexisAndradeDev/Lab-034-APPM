import { Injectable } from '@angular/core';
import { Alumno } from '../interface/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  private alumnos: Alumno[] = [];

  constructor() { }

  public agregarAlumno(alumno: Alumno ) {
    alumno.id = this.alumnos.length > 0 ? this.alumnos.length + 1 : 1;
    this.alumnos.push(alumno);
  }

  public borrarAlumno(id: number) {
    this.alumnos = this.alumnos.filter(
      (alumno) => {
        return alumno.id != id;
      }
    );
  }

  public getAlumnos(): Alumno[] {
    return this.alumnos;
  }

  public setAlumnos(alumnos: Alumno[]) {
    this.alumnos = alumnos;
  }

  public actualizarAlumno(alumnoActualizado: Alumno) {
    this.alumnos.filter(
      (alumno) => {
        return alumno.id == alumnoActualizado.id;
      }
    ).map((alumno) => {
      alumno.matricula = alumnoActualizado.matricula;
      alumno.nombre = alumnoActualizado.nombre;
    });
    return this.alumnos;  
  }
}
