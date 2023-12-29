import { rootReducer } from "../rootReducer";

const myLogger = (store) => (next) => (action) => {
  console.log("previous state", store.getState());
  console.log("upcoming state", [action].reduce(rootReducer, store.getState()));
  next(action);
};

export default myLogger;
