import { Component, OnInit } from '@angular/core';
import { Video } from '../../video';

import { VIDEOS } from '../../mock-videos';

@Component({
  selector: 'app-video-grid',
  templateUrl: './video-grid.component.html',
  styleUrls: ['./video-grid.component.scss'],
})
export class VideoGridComponent implements OnInit {
  videos?: Video[];

  videosFiltered?: Video[];

  param: string = '-';

  constructor() { }

  ngOnInit(): void {
    this.videos = VIDEOS;
    this.videosFiltered = VIDEOS;
  }

  filterByStr(str: string): void {
    if (str === '') {
      this.videosFiltered = this.videos;
    }

    const result = this.videos?.filter((video) => {
      return video.snippet.title.includes(str);
    });

    this.videosFiltered = result;
  }

  sortByViewsAsc(): void {
    const result = this.videosFiltered?.sort((videoA, videoB) => {
      const a = +videoA.statistics.viewCount;
      const b = +videoB.statistics.viewCount;
      return  a - b;
    });

    this.videosFiltered = result;
  }

  sortByViewsDesc(): void {
    const result = this.videosFiltered?.sort((videoA, videoB) => {
      const a = +videoA.statistics.viewCount;
      const b = +videoB.statistics.viewCount;
      return  b - a;
    });

    this.videosFiltered = result;
  }

  sortByDateAsc(): void {
    const result = this.videosFiltered?.sort((videoA, videoB) => {
      const a = new Date(videoA.snippet.publishedAt).getTime();
      const b = new Date(videoB.snippet.publishedAt).getTime();
      return  a - b;
    });

    this.videosFiltered = result;
  }

  sortByDateDesc(): void {
    const result = this.videosFiltered?.sort((videoA, videoB) => {
      const a = new Date(videoA.snippet.publishedAt).getTime();
      const b = new Date(videoB.snippet.publishedAt).getTime();
      return  b - a;
    });

    this.videosFiltered = result;
  }

}
