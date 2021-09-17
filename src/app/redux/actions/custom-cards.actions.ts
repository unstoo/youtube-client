import { createAction, props } from '@ngrx/store';
import { CustomCard } from '../../models/custom-card.interface';

export const addCustomCard = createAction(
  '[Cards List] Add Card',
  props<{ card: CustomCard }>(),
);
