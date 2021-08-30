import { VideosService } from '../../video-data/services/videos.service';
import { Component, OnInit } from '@angular/core';
import { Video } from '../../video-data/models/video';
import { VideoFilter } from '../../video-data/models/video-filter';

@Component({
  selector: 'app-video-grid',
  templateUrl: './video-grid.component.html',
  styleUrls: ['./video-grid.component.scss'],
})
export class VideoGridComponent implements OnInit {
  videos: Video[] = [];

  filter: VideoFilter =  { str: '' };

  constructor(private videosService: VideosService) { }

  ngOnInit(): void {
    this.videos = this.videosService.getVideos();
    this.filter = this.videosService.getFilter();
  }

}
