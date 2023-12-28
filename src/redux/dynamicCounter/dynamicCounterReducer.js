import { D_DECREMENT, D_INCREMENT } from "./actionTypes";

const initialState = {
  value: 0,
};

export const dynamicCounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case D_INCREMENT:
      return {
        ...state,
        value: state.value + action.payload.value,
      };
    case D_DECREMENT:
      return {
        ...state,
        value: state.value - action.payload.value,
      };
    default:
      return { ...state };
  }
};
