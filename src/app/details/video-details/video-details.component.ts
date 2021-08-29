import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../../video';
import { VIDEOS } from '../../mock-videos';



@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss'],
})
export class VideoDetailsComponent implements OnInit {
  @Input() video?: Video = VIDEOS[0];

  constructor() { }

  ngOnInit(): void {
  }

  goBack(): void {

  }

}
