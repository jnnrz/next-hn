import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { combinedReducers } from './reducers';
import { InitialAppState } from './state';

export function configureStore(initialState = InitialAppState) {
  return createStore(
    combinedReducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}
