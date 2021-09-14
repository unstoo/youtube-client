import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface Card {
  title: string,
  description: string,
  imgUrl: string,
  videUrl: string,
  date: string,
}

@Component({
  selector: 'app-admin',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss'],
})
export class CreateCardComponent  {
  card: Card | undefined;

  form!: FormGroup;

  date: string = (new Date()).toLocaleDateString();

  constructor() {
    this.form = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      description: new FormControl('', [
        Validators.required,
      ]),
      img: new FormControl('', [
        Validators.required,
      ]),
      video: new FormControl('', [
        Validators.required,
      ]),
    },
    {
      updateOn: 'blur',
    });
  }

  get title() {
    return this.form.controls.title;
  }

  get description() {
    return this.form.controls.description;
  }

  get img() {
    return this.form.controls.img;
  }

  get video() {
    return this.form.controls.video;
  }


  onClick(): void {
    console.log(this.form.value);
    console.log(this.form.controls.title);
    if (this.form.status === 'VALID'){
    }
  }

}
