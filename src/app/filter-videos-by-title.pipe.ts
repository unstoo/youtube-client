import { Pipe, PipeTransform } from '@angular/core';
import { Video } from './video';

@Pipe({
  name: 'filterVideosByTitle',
})
export class FilterVideosByTitlePipe implements PipeTransform {

  transform(value: Video[], title: string, len: string | undefined): Video[] {
    if (len) {
      // a hack to make VideoGridComponent re-rerender, when Video[] is sorted in VideosService
    }

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
