import * as types from './constants';
import { initialState } from './initialState';

export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.SET_VALUE_A:
      return { ...state, a: action.a };
    case types.SET_VALUE_B:
      return { ...state, b: action.b };
    default:
      return state;
  }
};
