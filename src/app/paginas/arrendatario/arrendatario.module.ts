import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ArrendatarioPageRoutingModule } from './arrendatario-routing.module';

import { ArrendatarioPage } from './arrendatario.page';
import { ResgistroMatriculaComponent } from 'src/app/componentes/resgistro-matricula/resgistro-matricula.component';
import { BuscarEstacionamientoComponent } from 'src/app/componentes/buscar-estacionamiento/buscar-estacionamiento.component';
import { GoogleMapaComponent } from 'src/app/componentes/google-mapa/google-mapa.component';
@NgModule({

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArrendatarioPageRoutingModule,
    
    
  ],
  declarations: [ArrendatarioPage,ResgistroMatriculaComponent,BuscarEstacionamientoComponent,GoogleMapaComponent]
  
})
export class ArrendatarioPageModule {}
