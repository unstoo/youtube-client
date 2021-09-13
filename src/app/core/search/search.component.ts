import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

import { AuthService } from 'src/app/auth/auth.service';
import { VideosService } from 'src/app/video/services/videos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  input: BehaviorSubject<string> = new BehaviorSubject<string>('');

  visible: boolean = false;

  auth: boolean = false;

  constructor(
    private videosService: VideosService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.authService.isAuthO().subscribe((auth) => this.auth = auth);
    this.input.pipe(
      map((i) => i),
      debounceTime(500),
    ).subscribe((val) => {
      if (val.length > 2) {
        this.videosService.search(val);
      }
    });
  }

  onChange(e: Event) {
    const el = e.target as HTMLInputElement;
    this.input.next(el.value);
  }

  toggleSettings() {
    this.visible = !this.visible;
  }
}
