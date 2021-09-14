import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Video } from '../../models/video';

const SEARCH = 'search?&part=snippet&maxResults=15&q=';
const YT = 'videos?&part=snippet,statistics&id=';

interface YoutubeIDResponse {
  items: {
    id: { videoId: string }
  }[]
}

interface Response {
  items: Video[],
}

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  data: BehaviorSubject<Video[]> = new BehaviorSubject<Video[]>([]);

  error: BehaviorSubject<HttpErrorResponse | null> = new BehaviorSubject<HttpErrorResponse | null>(null);

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
      map((res: Response) => res.items,
      ),
      catchError((error) =>  {
        this.error.next(error);
        return of([] as Video[]);
      }),
    ).subscribe((res) => {
      this.data.next(res);
      this.error.next(null);
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
