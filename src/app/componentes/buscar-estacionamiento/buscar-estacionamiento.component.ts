import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar-estacionamiento',
  templateUrl: './buscar-estacionamiento.component.html',
  styleUrls: ['./buscar-estacionamiento.component.scss'],
})
export class BuscarEstacionamientoComponent    {

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

}
