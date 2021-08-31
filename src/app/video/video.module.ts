import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoRoutingModule } from './video-routing.module';
import { VideoGridComponent } from './video-grid/video-grid.component';
import { VideoItemComponent } from './video-item/video-item.component';
import { VideoDetailsComponent } from './video-details/video-details.component';
import { ColorTagByDateDirective } from './directives/color-tag-by-date.directive';
import { FilterVideosByTitlePipe } from './pipes/filter-videos-by-title.pipe';


@NgModule({
  declarations: [
    VideoGridComponent,
    VideoItemComponent,
    VideoDetailsComponent,
    ColorTagByDateDirective,
    FilterVideosByTitlePipe,
  ],
  imports: [
    CommonModule,
    VideoRoutingModule,
  ],
  exports: [],
})
export class VideoModule { }
