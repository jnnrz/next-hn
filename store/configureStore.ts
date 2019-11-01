import { AppState, InitialAppState } from "./state";

const configureStoreComponent =
  process.env.NODE_ENV === 'development'
    ? require('./configureStore.dev')
    : require('./configureStore.prod');

export const configureStore = (initialAppState: AppState = InitialAppState) => {
  return configureStoreComponent.configureStore(initialAppState);
}