import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../../video';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.scss'],
})
export class VideoItemComponent implements OnInit {
  @Input() video?: Video;

  date?: number;

  currentClasses: any = {
    ['video-item']: true,
    underSevenDays: false,
    underOneMonth: false,
    underSixMonths: false,
    overSixMonths: false,
  };

  constructor() { }

  ngOnInit(): void {
    if (this.video) {
      this.setCurrentClasses(this.video.snippet.publishedAt);
    }
  }

  setCurrentClasses(publishedAt: string): void {
    const now = (new Date()).getTime();
    const videoTime = (new Date(publishedAt)).getTime();
    const diff = now - videoTime;
    const day = 24 * 60 * 60 * 1000;
    if (diff / day < 7) {
      this.currentClasses.underSevenDays = true;
      return;
    }

    if (diff / day < 31) {
      this.currentClasses.underOneMonth = true;
      return;
    }

    if (diff / day < 30 * 6) {
      this.currentClasses.underSixMonths = true;
      return;
    }

    this.currentClasses.overSixMonths = true;
  }

}
