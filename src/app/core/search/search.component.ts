import { Component, OnInit } from '@angular/core';
import { VideosService } from 'src/app/video-data/services/videos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  input: string = '';

  visible: boolean = false;

  name: string = 'Your Name';

  constructor(
    private videosService: VideosService
    ) { }

  ngOnInit(): void {
  }

  onSearch() {
    this.videosService.makeVisible();
  }

  toggleSettings() {
    this.visible = !this.visible;
  }
}
