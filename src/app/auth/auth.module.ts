import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ModalComponent } from './modal/modal.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    ModalComponent,
    SigninComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    ModalComponent,
  ],
})
export class AuthModule { }
