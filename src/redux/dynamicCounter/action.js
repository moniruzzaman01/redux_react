export const d_increment = (value) => {
  return {
    type: "dynamicCounter/increment",
    payload: { value },
  };
};
export const d_decrement = (value) => {
  return {
    type: "dynamicCounter/decrement",
    payload: { value },
  };
};
