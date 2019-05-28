// import * from './actions';
import * as types from './constants';

const initialState = {
  a: 0,
  b: 0,
};

// reducer
export const reducer = (state = initialState, action = {}) => {
  // console.log(action);
  switch (action.type) {
    case types.SET_VALUE_A:
      return { ...state, a: action.payload.a };
    case types.SET_VALUE_B:
      return { ...state, b: action.payload.b };
    default:
      return state;
  }
};

// module.exports = reducer;
