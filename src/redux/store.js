import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import myLogger from "./middlewares/myLogger";
import reduxLogger from "redux-logger";

const store = createStore(rootReducer, applyMiddleware(reduxLogger, myLogger));

export default store;
