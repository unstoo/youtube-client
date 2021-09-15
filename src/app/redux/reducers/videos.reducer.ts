import { createReducer, on } from '@ngrx/store';
import { addVideos } from '../actions/videos.actions';
import { Video } from 'src/app/models/video.interface';

export const initialState: Array<Video> = [];

export const customVideosReducer = createReducer(
  initialState,
  on(
    addVideos,
    (state, { videos, type } ) => {
      console.log(type);
      console.log('new data:', videos);
      console.log('existing state.videos:', state);

      return [...state, ...videos];
    },
  ),
);
