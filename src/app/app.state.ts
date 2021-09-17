import { CustomCard } from './models/custom-card.interface';
import { Video } from './models/video.interface';

export interface AppState {
  cards: Array<CustomCard>,
  videos: Array<Video>,
}
