import { createSelector } from '@ngrx/store';
import { AppState } from '../../app.state';
import { Video } from 'src/app/models/video.interface';

export const selectVideos = createSelector(
  (state: AppState) => state.videos,
  (videos: Array<Video>) => videos,
);

