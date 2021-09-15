import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoDetailsComponent } from './video-details/video-details.component';
import { VideoGridComponent } from './video-grid/video-grid.component';

const routes: Routes = [
  {
    path: '',
    component: VideoGridComponent,
  },
  {
    path: ':id',
    component: VideoDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoRoutingModule { }
