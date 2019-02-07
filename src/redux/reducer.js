// initial state
const initialState = {
  value: 0,
};

// constants
const types = {
  SET_VALUE: 'SET_VALUE',
};

// actions
export const setValue = (value) => ({
  type: types.SET_VALUE,
  payload: {
    value,
  },
});

// reducer
export const reducer = (state = initialState, action = {}) => {
  console.log(action);
  switch (action.type) {
    case types.SET_VALUE:
      return { state: { ...initialState, value: action.payload.value } };
    default:
      return state;
  }
};
