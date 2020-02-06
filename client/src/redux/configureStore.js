import { compose, createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise";
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import ReduxThunk from "redux-thunk";

export const configureStore = () => {
 const store = compose(
  applyMiddleware(promiseMiddleware, ReduxThunk),
  devToolsEnhancer()
 )(createStore)(rootReducer);
 return store;
};
