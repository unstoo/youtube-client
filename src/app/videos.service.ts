import { Injectable } from '@angular/core';
import { Video } from './video';
import { VideoFilter } from './video-filter';
import { VIDEOS } from './mock-videos';

@Injectable({
  providedIn: 'root',
})
export class VideosService {
  videos: Video[] = VIDEOS;

  filter: VideoFilter = {
    str: '',
  };

  constructor() { }

  getVideos(): Video[] {
    return this.videos;
  }

  getFilter(): VideoFilter {
    return this.filter;
  }

  sortByViewsAsc(): void {
    const result = this.videos?.sort((videoA, videoB) => {
      const a = +videoA.statistics.viewCount;
      const b = +videoB.statistics.viewCount;
      return  a - b;
    });

    this.videos = result;
  }

  sortByViewsDesc(): void {
    const result = this.videos.sort((videoA, videoB) => {
      const a = +videoA.statistics.viewCount;
      const b = +videoB.statistics.viewCount;
      return  b - a;
    });

    this.videos = result;
  }

  sortByDateAsc(): void {
    const result = this.videos.sort((videoA, videoB) => {
      const a = new Date(videoA.snippet.publishedAt).getTime();
      const b = new Date(videoB.snippet.publishedAt).getTime();
      return  a - b;
    });

    this.videos = result;
  }

  sortByDateDesc(): void {
    const result = this.videos.sort((videoA, videoB) => {
      const a = new Date(videoA.snippet.publishedAt).getTime();
      const b = new Date(videoB.snippet.publishedAt).getTime();
      return  b - a;
    });

    this.videos = result;
  }


}
