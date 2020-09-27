import {Action} from 'redux';

import {formatDate} from '../utils';

// Action
export const ADD_DATE = 'ADD_DATE';

// Reducer
export default function reducer(state = {}, action: Action) {
  switch (action.type) {
    case ADD_DATE:
      const date = (action as AddDate).date;
      const currentDate = formatDate(new Date());
      return {...state, [currentDate]: date};
    default:
      return state;
  }
}

export type EmotionsDates = Record<string, EmotionDate>;

export type EmotionDate = {
  selected: boolean;
  selectedColor: string;
  moodId: string;
};

interface AddDate {
  type: 'ADD_DATE';
  date: EmotionDate;
}

// Action Creator
export const addDate: (date: EmotionDate) => AddDate = (date) => ({
  type: ADD_DATE,
  date,
});
