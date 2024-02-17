import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumnosPageRoutingModule } from './alumnos-routing.module';

import { AlumnosPage } from './alumnos.page';
import { TablaAlumnosComponent } from '../tabla-alumnos/tabla-alumnos.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumnosPageRoutingModule
  ],
  declarations: [AlumnosPage, TablaAlumnosComponent]
})
export class AlumnosPageModule {}
