import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { VideosService } from 'src/app/video/services/videos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  input: string = '';

  visible: boolean = false;

  auth: boolean = false;

  constructor(
    private videosService: VideosService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.authService.isAuthO().subscribe((auth) => this.auth = auth);
  }

  onSearch() {
    this.videosService.makeVisible();
  }

  toggleSettings() {
    this.visible = !this.visible;
  }
}
