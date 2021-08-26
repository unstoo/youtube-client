import { Component, OnInit } from '@angular/core';
import { Video } from '../../video';
import { VideosService } from '../../videos.service';


@Component({
  selector: 'app-video-grid',
  templateUrl: './video-grid.component.html',
  styleUrls: ['./video-grid.component.scss'],
})
export class VideoGridComponent implements OnInit {
  videos: Video[] = [];

  constructor(private videosService: VideosService) { }

  ngOnInit(): void {
    this.videos = this.videosService.getVideos();
  }

}
