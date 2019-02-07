// initial state
const initialState = {
  a: 0,
  b: 0,
};

// constants
const types = {
  SET_VALUE_A: 'SET_VALUE_A',
  SET_VALUE_B: 'SET_VALUE_B',
};

// actions
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
