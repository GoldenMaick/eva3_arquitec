import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrendatario',
  templateUrl: './arrendatario.page.html',
  styleUrls: ['./arrendatario.page.scss'],
})
export class ArrendatarioPage implements OnInit {


  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  mostrarFormulario: boolean = false; // Variable para controlar la visibilidad del formulario
  direccion: string = '';
  HoraInicio: string = '';
  HoraTermino: string = '';
  telefono: string = '';


  mostrarSelector: boolean = false; // Controla si el selector de fecha está visible
  fechaSeleccionada: string | null = null; // Almacena la fecha seleccionada

  constructor() {}

  // Método llamado cuando se selecciona una fecha
  onFechaSeleccionada(event: any) {
    this.fechaSeleccionada = event.detail.value; // Guarda la fecha seleccionada
    console.log('Fecha seleccionada:', this.fechaSeleccionada);
  }
  // Método para mostrar/ocultar el formulario
  toggleFormulario() {
    this.mostrarFormulario = !this.mostrarFormulario;
  }

  // Método para manejar el envío del formulario
  enviarFormulario() {

    alert('Reserva exitosa');
    this.limpiarFormulario();
    this.mostrarFormulario = false; // Ocultar el formulario después de enviarlo
  }

  // Método para limpiar los datos del formulario
  limpiarFormulario() {
    this.direccion = '';
    this.HoraInicio = '';
    this.HoraTermino = '';
    this.telefono = '';
  }

  ngOnInit() {
  }

}
