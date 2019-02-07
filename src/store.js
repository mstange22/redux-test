import { createStore } from 'redux';

// initial state
const initialState = {
  a: 0,
  b: 0,
};

// constants
const SET_VALUE_A = 'SET_VALUE_A';
const SET_VALUE_B = 'SET_VALUE_B';

// actions
export const setValueA = a => ({
  type: SET_VALUE_A,
  payload: {
    a,
  },
});

export const setValueB = b => ({
  type: SET_VALUE_B,
  payload: {
    b,
  },
});

// reducer
const reducer = (state = initialState, action = {}) => {
  // console.log(action);
  switch (action.type) {
    case SET_VALUE_A:
      return { ...state, a: action.payload.a };
    case SET_VALUE_B:
      return { ...state, b: action.payload.b };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
