import {Action} from 'redux';

import {Emotion, emotions} from '../data';

// Action
export const ADD_EMOTION = 'ADD_EMOTION';

// Reducer
export default function reducer(state = emotions, action: Action) {
  switch (action.type) {
    case ADD_EMOTION:
      const emotion = (action as AddEmotion).emotion;
      return [...state, emotion];
    default:
      return state;
  }
}

interface AddEmotion {
  type: 'ADD_EMOTION';
  emotion: Emotion;
}

// Action Creator
export const addEmotion: (emotion: Emotion) => AddEmotion = (emotion) => ({
  type: ADD_EMOTION,
  emotion,
});
