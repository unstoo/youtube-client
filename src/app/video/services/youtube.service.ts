import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Video } from '../../models/video';

import { KEY } from '../../const/YT_KEY';

interface YoutubeIDResponse {
  items: {
    id: { videoId: string }
  }[]
}

interface YoutubeVideosResponse {
  items: Video[],
  status: number,
}

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {

  private videos: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  data: BehaviorSubject<Video[]> = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) { }

  fetchVideos(searchText: string): void {
    const SEARCH = `https://www.googleapis.com/youtube/v3/search?&key=${KEY}&part=snippet&maxResults=15&q=`;
    const YT = `https://www.googleapis.com/youtube/v3/videos?&key=${KEY}x&part=snippet,statistics&id=`;


    this.http.get<YoutubeIDResponse>(SEARCH + searchText, {}).pipe(
      map((ytResponse: YoutubeIDResponse) => {
        const videoIds: string[] = ytResponse.items
          .map((item: any) => item.id.videoId);
        return videoIds.join(',');
      }),
      mergeMap((videoIds: string) => this.http.get<YoutubeVideosResponse>(YT + videoIds),
      ),
      catchError((error) =>  {
        console.log('error', error);
        return of(error);
      }),
    ).subscribe((res: YoutubeVideosResponse) => {
      console.log('stopped fetching id', res);
      if (res.status === 200) {
        const videos: Video[] = res.items;
        this.data.next(videos);
      }
    });
  }

  getData(): Observable<any> {
    return this.data;
  }
}
