import { Component, OnInit } from '@angular/core';

interface SI {
  input: string
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  input: string = '';
  visible: boolean = false;
  name: string = 'Your Name'

  constructor() { }

  ngOnInit(): void {
  }

  searchHandler() {
    // this.visible = true;
  }

  toggleSettings() {
    this.visible = !this.visible;
  }
}
