import { Component, OnInit } from '@angular/core';
import { Video } from '../../video';

@Component({
  selector: 'app-video-grid',
  templateUrl: './video-grid.component.html',
  styleUrls: ['./video-grid.component.scss']
})
export class VideoGridComponent implements OnInit {
  videos: Video[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
