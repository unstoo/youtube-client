import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  modal: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleModal(): void {
    this.modal = !this.modal;
  }
}
