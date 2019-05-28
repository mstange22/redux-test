import * as types from './constants';

export const setValueA = a => ({
  type: types.SET_VALUE_A,
  payload: {
    a,
  },
});

export const setValueB = b => ({
  type: types.SET_VALUE_B,
  payload: {
    b,
  },
});
