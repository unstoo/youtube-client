import { VideosService } from 'src/app/video/services/videos.service';
import { Component, OnInit } from '@angular/core';
import { Video } from '../../models/video.interface';

@Component({
  selector: 'app-video-grid',
  templateUrl: './video-grid.component.html',
  styleUrls: ['./video-grid.component.scss'],
})
export class VideoGridComponent implements OnInit {
  videos: Video[] = [];

  filter: string =  '';

  isLoading: boolean = true;

  constructor(private videosService: VideosService) {}

  ngOnInit(): void {
    this.videosService.title.subscribe((title) => {
      this.filter = title;
    });

    this.videosService.isLoading.subscribe((val) => {
      this.isLoading = val;
    });

    this.videosService.videos.subscribe((val) => {
      this.videos = val;
    });
  }


}
