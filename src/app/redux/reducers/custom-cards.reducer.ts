import { createReducer, on } from '@ngrx/store';

import { addCustomCard } from '../actions/custom-cards.actions';
import { CustomCard } from  '../../models/custom-card.interface';

export const initialState: Array<CustomCard> = [
  {
    title: 'stub#',
    date:'11-21',
    description: 'some_thing',
    imgUrl: 'href',
    videoUrl: 'href',
  },
];

export const customCardsReducer = createReducer(
  initialState,
  on(
    addCustomCard,
    (state, { card, type } ) => {
      console.log(type, '= ', card);

      return [...state, card];
    },
  ),
);
