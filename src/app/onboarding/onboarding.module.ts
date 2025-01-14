import {NgModule} from '@angular/core';

import {OnboardingPageRoutingModule} from './onboarding-routing.module';

import {OnboardingPage} from './onboarding/onboarding.page';
import {LoginPage} from './login/login.page';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    imports: [
        OnboardingPageRoutingModule,
        SharedModule
    ],
    declarations: [OnboardingPage, LoginPage]
})
export class OnboardingPageModule {
}
