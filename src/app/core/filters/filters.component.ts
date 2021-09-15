import { Component, OnInit, Input } from '@angular/core';
import { VideosService } from '../../video/services/videos.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  @Input() visible: boolean = false;

  datesDesc: boolean = true;

  viewsDesc: boolean = true;

  filter: string = '';

  constructor(private videosService: VideosService) {}

  ngOnInit(): void {
    this.videosService.title.subscribe((val) => {
      this.filter = val;
    });
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
    this.videosService.title.next(target.value);
  }

}
