import { createAction, props } from '@ngrx/store';
import { Video } from '../../models/video.interface';

export const addVideos = createAction(
  '[Videos] Add Videos',
  props<{ videos: Array<Video> }>(),
);
