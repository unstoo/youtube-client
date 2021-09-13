import { Injectable } from '@angular/core';
import { Video } from '../models/video';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class VideosService {
  videos: Video[] = [];

  private isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  isLoading: Observable<boolean> = this.isLoading$.asObservable();

  title: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }

  getVideos(): Video[] {
    return this.videos;
  }

  getByIndex(i: number): Video {
    return this.videos[i];
  }

  searchFor(title: string): void {
    this.title.next(title);
  }

  getFilter(): Observable<string> {
    return this.title.asObservable();
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
