import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  form!: FormGroup;

  constructor(private authService: AuthService) {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    },
    {
      updateOn: 'blur',
    });
  }

  ngOnInit(): void {
  }

  get f() {
    return this.form.controls;
  }

  get email() {
    return this.form.value.email;
  }

  get password() {
    return this.form.value.password;
  }

  submit(): void {
    if (this.form.status === 'VALID'){
      this.authService.login(this.email, this.password);
    }
  }

}
