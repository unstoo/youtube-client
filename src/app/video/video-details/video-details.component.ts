import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Video } from '../../video-data/models/video';
import { ActivatedRoute } from '@angular/router';
import { VideosService } from 'src/app/video-data/services/videos.service';



@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss'],
})
export class VideoDetailsComponent implements OnInit {
  @Input() video?: Video;

  @Input() index?: number;

  constructor(
    private route: ActivatedRoute,
    private service: VideosService,
    private location: Location) { }

  ngOnInit(): void {
    const index = this.route.snapshot.params.id;
    this.video = this.service.getByIndex(index);
  }

  goBack(): void {
    this.location.back();
  }

}
