import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Video } from '../../models/video';

import { KEY } from '../../const/YT_KEY';

const SEARCH = `https://www.googleapis.com/youtube/v3/search?&key=${KEY}&part=snippet&maxResults=15&q=`;
const YT = `https://www.googleapis.com/youtube/v3/videos?&key=${KEY}&part=snippet,statistics&id=`;

interface YoutubeIDResponse {
  items: {
    id: { videoId: string }
  }[]
}

interface Response {
  items: Video[],
  status: number,
  error: any,
}

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  data: BehaviorSubject<Video[]> = new BehaviorSubject<Video[]>([]);

  constructor(private http: HttpClient) { }

  fetchVideos(searchText: string): void {
    this.http.get<YoutubeIDResponse>(SEARCH + searchText, {}).pipe(
      map((ytResponse: YoutubeIDResponse) => {
        const videoIds: string[] = ytResponse.items
          .map((item: any) => item.id.videoId);
        return videoIds.join(',');
      }),
      mergeMap((videoIds: string) => this.http.get<Response>(YT + videoIds),
      ),
      catchError((error) =>  {
        return of(error);
      }),
    ).subscribe((res: Response) => {
      if (!res.error) {
        const videos: Video[] = res.items;
        this.data.next(videos);
      }
    });
  }

  fetchOneVideo(id: string): Observable<any> {
    return this.http.get<Video>(YT + id).pipe(
      mergeMap((res: any) => {
        return from(res.items);
      }),
    );
  }

  getData(): Observable<any> {
    return this.data;
  }
}
