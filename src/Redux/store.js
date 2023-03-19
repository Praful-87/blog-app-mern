import {
  legacy_createStore,
  compose,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { reducer as AppReducer } from "./App/reducer";
import { reducer as AuthReducer } from "./Auth/reducer";
const rootReducer = combineReducers({ AppReducer, AuthReducer });
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);
