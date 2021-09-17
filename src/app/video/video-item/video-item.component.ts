import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../../models/video.interface';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.scss'],
})
export class VideoItemComponent implements OnInit {
  @Input() video?: Video;

  @Input() index?: number;

  constructor() { }

  ngOnInit(): void {
  }

}
