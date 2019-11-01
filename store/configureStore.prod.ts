import { applyMiddleware, createStore } from "redux";
import { combinedReducers } from './reducers';
import { InitialAppState } from './state';

export function configureStore(initialState = InitialAppState) {
  return createStore(
    combinedReducers,
    initialState,
    applyMiddleware()
  );
}