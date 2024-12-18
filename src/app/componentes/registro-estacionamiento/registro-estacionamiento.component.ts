import { Component, OnInit, ViewChild } from '@angular/core';
import { OverlayEventDetail } from '@ionic/core/components';
import { IonModal } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-registro-estacionamiento',
  templateUrl: './registro-estacionamiento.component.html',
  styleUrls: ['./registro-estacionamiento.component.scss'],
})
export class RegistroEstacionamientoComponent   {

  @ViewChild(IonModal) modal!: IonModal;

  message = '';
  name!: string;
  toastController: any;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Registro completo!`;
    }
  }

  photo: string | undefined; 
  async presentToast(position:'bottom') {
    const toast = await this.toastController.create({
      message: 'Informe enviado correctamente',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }
  async tomarFoto() {
     try {
       const image = await Camera.getPhoto({
         quality: 90,
         allowEditing: false,
         resultType: CameraResultType.DataUrl, 
         source: CameraSource.Camera, 
       });
   
       this.photo = image.dataUrl; 
     } catch (error) {
       console.error('Error al tomar la foto:', error);
     }
   }

}
