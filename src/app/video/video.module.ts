import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoItemComponent } from './video-item/video-item.component';
import { VideoGridComponent } from './video-grid/video-grid.component';
import { FilterVideosByTitlePipe } from './pipes/filter-videos-by-title.pipe';
import { ColorTagByDateDirective } from './directives/color-tag-by-date.directive';
import { VideoDetailsComponent } from './video-details/video-details.component';



@NgModule({
  declarations: [
    VideoItemComponent,
    VideoGridComponent,
    VideoDetailsComponent,
    FilterVideosByTitlePipe,
    ColorTagByDateDirective,
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
    VideoGridComponent,
    VideoDetailsComponent,
  ]
})
export class VideoModule { }
