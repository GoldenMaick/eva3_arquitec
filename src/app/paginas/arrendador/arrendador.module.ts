import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArrendadorPageRoutingModule } from './arrendador-routing.module';

import { ArrendadorPage } from './arrendador.page';
import { RegistroEstacionamientoComponent } from 'src/app/componentes/registro-estacionamiento/registro-estacionamiento.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArrendadorPageRoutingModule
  ],
  declarations: [ArrendadorPage,RegistroEstacionamientoComponent]
})
export class ArrendadorPageModule {}
