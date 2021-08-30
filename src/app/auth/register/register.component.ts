import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;

  constructor() {
    this.form = new FormGroup({
      firstname: new FormControl('', [
        Validators.required,
      ]),
      lastname: new FormControl('', [
        Validators.required,
      ]),
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
