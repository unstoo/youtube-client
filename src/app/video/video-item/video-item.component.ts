import { Component, OnInit } from '@angular/core';
import { Video } from '../../video';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.scss']
})
export class VideoItemComponent implements OnInit {
  video?: Video;

  constructor() { }

  ngOnInit(): void {
  }

}
