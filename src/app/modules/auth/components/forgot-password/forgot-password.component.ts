import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})

export class ForgotPasswordComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public toastController: ToastController, public navCtrl: NavController) {
    const emailRegex = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

    this.loginForm = this.formBuilder.group({
      email: ['your@email-here.com', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
    });
   }

  ngOnInit(): void { }

  public onLogin(): void {
    this.presentToast();
    this.goToMyPage();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Thank you, your password has been reset! Please check your email',
      position: 'top',
      duration: 2000
    });
    toast.present();
  }

  async goToMyPage() {
    // go to the MyPage component
    this.navCtrl.navigateBack('');
  }
}
