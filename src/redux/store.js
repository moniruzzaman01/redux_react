import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import myLogger from "./middlewares/myLogger";
import reduxLogger from "redux-logger";
import { composeWithDevTools } from "@redux-devtools/extension";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxLogger, myLogger))
);

export default store;
