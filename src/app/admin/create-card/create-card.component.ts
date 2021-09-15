import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { CustomCard } from 'src/app/models/custom-card.interface';
import { addCustomCard } from '../../redux/actions/custom-cards.actions';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss'],
})
export class CreateCardComponent  {
  card: CustomCard | undefined;

  form!: FormGroup;

  constructor(private store: Store, private router: Router) {
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
    if (this.form.status === 'VALID') {
      const card = this.createCard();
      const action = addCustomCard({ card });
      this.store.dispatch(action);
      this.router.navigate(['/admin']);
    }
  }

  createCard(): CustomCard {
    return {
      ...this.form.value,
      date: this.getDate(),
    };
  }

  getDate(): string {
    return (new Date()).toLocaleDateString();
  }
}
