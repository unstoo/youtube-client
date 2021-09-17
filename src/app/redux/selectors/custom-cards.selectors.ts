import { createSelector } from '@ngrx/store';
import { AppState } from '../../app.state';
import { CustomCard } from 'src/app/models/custom-card.interface';

export const selectCards = createSelector(
  (state: AppState) => state.cards,
  (cards: Array<CustomCard>) => cards,
);

