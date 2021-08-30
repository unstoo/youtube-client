import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  form!: FormGroup;

  constructor() {
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

  submit(): void {
    if (this.form.status === 'VALID'){
      console.log(this.form.value);
    }
  }

}
