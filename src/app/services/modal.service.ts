import { Injectable, EventEmitter, Output } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Injectable()
export class ModalService {
  @Output() change: EventEmitter<string> = new EventEmitter();
  @Output() more: EventEmitter<boolean> = new EventEmitter();

  constructor(public modalCtrl: ModalController) {
  }

  async show(comp: any, data?: any) {
    const modal = await this.modalCtrl.create({
      component: comp,
      componentProps: { data }
    });
    return await modal.present();
  }

  public page(): void {
    this.more.emit(true)
  }

  public close(): void {
    this.modalCtrl.dismiss();
  }
}
