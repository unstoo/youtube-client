import { Pipe, PipeTransform } from '@angular/core';
import { Video } from '../../video-data/models/video';

@Pipe({
  name: 'filterVideosByTitle',
  pure: false,
})
export class FilterVideosByTitlePipe implements PipeTransform {

  transform(value: Video[], title: string): Video[] {
    if (title === '') {
      return [...value];
    }

    const result: Video[] = [];

    value.forEach((video) => {
      if (video.snippet.title.includes(title)) {
        result.push(video);
      }
    });

    return result;
  }
}
