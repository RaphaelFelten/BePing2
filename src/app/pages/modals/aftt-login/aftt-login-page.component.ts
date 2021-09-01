import {Component, OnInit, Optional} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngxs/store';
import {Login} from '../../../core/store/user/aftt.actions';
import {finalize, take} from 'rxjs/operators';
import {IonNav, ModalController, ToastController} from '@ionic/angular';
import {KeyboardService} from '../../../core/services/keyboard/keyboard.service';

@Component({
    selector: 'beping-aftt-login',
    templateUrl: './aftt-login-page.component.html',
    styleUrls: ['./aftt-login-page.component.scss']
})
export class AfttLoginPage implements OnInit {

    loginForm: FormGroup;
    loading = false;

    constructor(
        private readonly formBuilder: FormBuilder,
        private readonly store: Store,
        private readonly toastr: ToastController,
        @Optional() private readonly ionNav: IonNav,
        @Optional() public readonly modalCtrl: ModalController,
        private readonly keyboardService: KeyboardService
    ) {
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required]]
        });
    }

    login() {
        this.keyboardService.hideKeyboard();
        const action = new Login(this.loginForm.controls.username.value, this.loginForm.controls.password.value);
        this.loading = true;
        this.store.dispatch(action).pipe(
            take(1),
            finalize(() => this.loading = false)
        ).subscribe(async () => {
            if (this.modalCtrl) {
                await this.modalCtrl.dismiss({logged: true});
            } else {
                const toast = await this.toastr.create({
                    message: 'Connecté avec l\'AFTT',
                    position: 'bottom',
                    color: 'success',
                    duration: 2000
                });
                await toast.present();
                await this.ionNav.pop();
            }

        }, async () => {
            const toast = await this.toastr.create({
                message: 'Login invalide',
                position: 'bottom',
                color: 'danger',
                duration: 2000
            });
            await toast.present();
        });
    }

    closeModal() {
        this.modalCtrl.dismiss({logged: false});
    }
}