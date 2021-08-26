import { Pipe, PipeTransform } from '@angular/core';
import { Video } from './video';

@Pipe({
  name: 'filterVideosByTitle',
})
export class FilterVideosByTitlePipe implements PipeTransform {

  transform(value: Video[], title: string): Video[] {
    return value.filter((data) => data.snippet.title.includes(title));
  }
}
