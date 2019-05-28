import * as types from './constants';

export const setValueA = a => ({
  type: types.SET_VALUE_A,
  a,
});

export const setValueB = b => ({
  type: types.SET_VALUE_B,
  b,
});
