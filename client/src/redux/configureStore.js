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

// let composeEnhancers = compose;

// if (__DEV__) {
//   composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
// }

// export const configureStore = () => {
//  return createStore(
//   rootReducer,
//   // applyMiddleware(promiseMiddleware, ReduxThunk),
//   // devToolsEnhancer()
//   composeEnhancers(applyMiddleware(promiseMiddleware, ReduxThunk))
//  );
// };
