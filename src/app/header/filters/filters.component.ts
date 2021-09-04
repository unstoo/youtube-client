import { Component, OnInit, Input } from '@angular/core';
import { VideosService } from '../../videos.service';
import { VideoFilter } from '../../video-filter';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  @Input() visible: boolean = false;

  datesDesc: boolean = true;

  viewsDesc: boolean = true;

  filter: VideoFilter = { str: '' };

  constructor(private videosService: VideosService) { }

  ngOnInit(): void {
    this.filter = this.videosService.getFilter();
  }

  sortByDate(): void {
    if (this.datesDesc) {
      this.videosService.sortByDateDesc();
    } else {
      this.videosService.sortByDateAsc();
    }
    this.datesDesc = !this.datesDesc;
  }

  sortByViews(): void {
    if (this.viewsDesc) {
      this.videosService.sortByViewsDesc();
    } else {
      this.videosService.sortByViewsAsc();
    }
    this.viewsDesc = !this.viewsDesc;
  }

  filterChange(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    console.log(target.value);
    this.filter.str = target.value;
  }

}
