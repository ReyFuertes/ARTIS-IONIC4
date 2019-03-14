import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SurveyState } from 'src/app/modules/survey/survey.reducer';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Login } from '../../auth.actions';
import { ModalService } from 'src/app/services/modal.service';
import { User } from 'src/app/models/user.model';
import { UserInfo } from 'src/app/models/survey.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public isSubmitting: boolean = false;

  constructor(private firebase: FirebaseService,
    private store: Store<SurveyState>,
    private formBuilder: FormBuilder,
    private router: Router,
    public modalService: ModalService,
    public toastController: ToastController) {
    const emailRegex = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
      password: ["", Validators.compose([Validators.required])]
    });


  }

  ngOnInit(): void { }

  public onLogin(): void {
    this.isSubmitting = true;
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;

    this.firebase.login(email, password).then((response: any) => {
      this.isSubmitting = false;
      const user: User = {
        uid: response.user.uid,
        apiKey: response.user.apiKey,
        displayName: response.user.displayName,
        email: response.user.email,
      };
      this.setUserInfo(user);

    }, () => {
      this.isSubmitting = false;
      this.presentToast();
    });

  }

  public setUserInfo = (user: User) => {
    const userInfo$ = this.firebase.getUserInfo(user.uid);
    userInfo$.subscribe((userInfo: UserInfo) => {
      user.userInfo = userInfo;

      this.store.dispatch(new Login({ user }));
      setTimeout(() => {
        this.router.navigateByUrl('/dashboard');
      }, 100);
    })
  }

  public gotoSignUp(): void {
    this.router.navigateByUrl('/sign-up');
  }
  public gotoForgotPass(): void {
    this.router.navigateByUrl('/forgot-password');
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Password and Username is Invalid!',
      position: 'top',
      duration: 2000
    });
    toast.present();
  }
}
