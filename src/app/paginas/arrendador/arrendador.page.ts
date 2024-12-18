import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Geolocation } from '@capacitor/geolocation';
@Component({
  selector: 'app-arrendador',
  templateUrl: './arrendador.page.html',
  styleUrls: ['./arrendador.page.scss'],
})
export class ArrendadorPage  {

  postalCode: string = '';
  owner = {
    name: '',
    rut: '',
    phone: '',
    photo: '',
  };
  isModalOpen = false;

  

  selectedAddress: string = '';

  async openMap() {
    try {
      // Obtener la ubicación actual
      const position = await Geolocation.getCurrentPosition();
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      // Crear un modal para mostrar el mapa
      const mapModal = document.createElement('div');
      mapModal.style.position = 'fixed';
      mapModal.style.top = '0';
      mapModal.style.left = '0';
      mapModal.style.width = '100%';
      mapModal.style.height = '100%';
      mapModal.style.zIndex = '1000';
      mapModal.style.backgroundColor = 'white';

      const closeButton = document.createElement('button');
      closeButton.innerText = 'Cerrar';
      closeButton.style.position = 'absolute';
      closeButton.style.top = '10px';
      closeButton.style.right = '10px';
      closeButton.style.zIndex = '1001';
      closeButton.addEventListener('click', () => document.body.removeChild(mapModal));

      const mapContainer = document.createElement('div');
      mapContainer.style.width = '100%';
      mapContainer.style.height = '100%';

      mapModal.appendChild(mapContainer);
      mapModal.appendChild(closeButton);
      document.body.appendChild(mapModal);

      // Inicializar Google Maps
      const map = new google.maps.Map(mapContainer, {
        center: { lat, lng },
        zoom: 15,
      });

      const marker = new google.maps.Marker({
        position: { lat, lng },
        map: map,
        draggable: true,
      });

      // Escuchar eventos de movimiento del marcador
      google.maps.event.addListener(marker, 'dragend', async (event: any) => {
        const selectedLat = event.latLng.lat();
        const selectedLng = event.latLng.lng();

        // Obtener dirección con Geocoding API
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ location: { lat: selectedLat, lng: selectedLng } }, (results: any, status: any) => {
          if (status === 'OK' && results[0]) {
            this.selectedAddress = results[0].formatted_address;
            console.log('Dirección seleccionada:', this.selectedAddress);
          } else {
            console.error('Error al obtener la dirección:', status);
          }
        });
      });
    } catch (error) {
      console.error('Error al abrir el mapa:', error);
    }
  }





  async selectImage() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,  // Permite al usuario elegir entre cámara o galería
      });

      if (image.dataUrl) {
        this.owner.photo = image.dataUrl; // Asignar la imagen al objeto del propietario
      }
    } catch (error) {
      console.error('Error al seleccionar la imagen', error);
    }
  }

  submitForm() {
    console.log('Datos del formulario:', {
      ubicacion: this.postalCode,
      propietario: this.owner,
    });
    this.owner = {
      name: '',
      rut: '',
      phone: '',
      photo: '',
    };
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}

