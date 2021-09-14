import { Injectable } from '@angular/core';
import { Video } from '../../models/video';
import { BehaviorSubject, Observable } from 'rxjs';
import { YoutubeService } from './youtube.service';


@Injectable({
  providedIn: 'root',
})
export class VideosService {
  selectedVideo: BehaviorSubject<Video | undefined> = new BehaviorSubject<Video | undefined>(undefined);

  videos:  BehaviorSubject<Video[]> = new BehaviorSubject<Video[]>([]);

  isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  title: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private ytService: YoutubeService) {
    this.ytService.data.subscribe((videos) => {
      this.videos.next(videos);
    });
  }

  search(query: string): void {
    this.ytService.fetchVideos(query);
  }

  getByIndex(id: string): Observable<Video | undefined> {
    const result = this.videos.value.find((v) => v.id === id);

    if (result === undefined) {
      this.ytService.fetchOneVideo(id).subscribe((val) => {
        this.selectedVideo.next(val);
      });
    } else {
      this.selectedVideo.next(result);
    }

    return this.selectedVideo.asObservable();
  }

  filterByTitle(title: string): void {
    this.title.next(title);
  }

  sortByViewsAsc(): void {
    const result = this.videos.value.sort((videoA, videoB) => {
      const a = +videoA.statistics.viewCount;
      const b = +videoB.statistics.viewCount;
      return  a - b;
    });

    this.videos.next(result);
  }

  sortByViewsDesc(): void {
    const result = this.videos.value.sort((videoA, videoB) => {
      const a = +videoA.statistics.viewCount;
      const b = +videoB.statistics.viewCount;
      return  b - a;
    });

    this.videos.next(result);
  }

  sortByDateAsc(): void {
    const result = this.videos.value.sort((videoA, videoB) => {
      const a = new Date(videoA.snippet.publishedAt).getTime();
      const b = new Date(videoB.snippet.publishedAt).getTime();
      return  a - b;
    });

    this.videos.next(result);
  }

  sortByDateDesc(): void {
    const result = this.videos.value.sort((videoA, videoB) => {
      const a = new Date(videoA.snippet.publishedAt).getTime();
      const b = new Date(videoB.snippet.publishedAt).getTime();
      return  b - a;
    });

    this.videos.next(result);
  }


}
