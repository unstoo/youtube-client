import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { Video } from '../../models/video';
import { VideosService } from 'src/app/video/services/videos.service';



@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss'],
})
export class VideoDetailsComponent implements OnInit {
  video?: Video;

  index?: number;

  thumbnail: string = '';

  private readonly canGoBack: boolean;

  constructor(
    private service: VideosService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly location: Location) {
    this.canGoBack = !!(this.router.getCurrentNavigation()?.previousNavigation);
  }

  ngOnInit(): void {
    const index = this.route.snapshot.params.id;
    this.video = this.service.getByIndex(index);
    this.thumbnail = this.video?.snippet.thumbnails.standard?.url || this.video?.snippet.thumbnails.high?.url || '';
  }

  goBack(): void {
    if (this.canGoBack) {
      this.location.back();
    } else {
      this.router.navigate(['..'], { relativeTo: this.route });
    }
  }

}
