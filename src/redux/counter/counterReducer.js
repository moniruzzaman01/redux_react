import { DECREMENT, INCREMENT } from "./actionTypes";

const initialState = {
  value: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + action.payload.value,
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - action.payload.value,
      };
    default:
      return { ...state };
  }
};
