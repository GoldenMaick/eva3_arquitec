import { Component, OnInit, ViewChild } from '@angular/core';
import { OverlayEventDetail } from '@ionic/core/components';
import { IonModal } from '@ionic/angular';
@Component({
  selector: 'app-resgistro-matricula',
  templateUrl: './resgistro-matricula.component.html',
  styleUrls: ['./resgistro-matricula.component.scss'],
})
export class ResgistroMatriculaComponent    {
 
  @ViewChild(IonModal) modal!: IonModal;

  message = '';
  name!: string;

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






}
