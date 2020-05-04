import { applyMiddleware, createStore, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducers from "./reducers";

const middlewares= [thunk, logger]
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));
export default store;
