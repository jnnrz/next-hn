import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunkMiddleware from 'redux-thunk';
import { combinedReducers } from './reducers';
import { AppState, InitialAppState } from './state';

const persistConfig = {
	key: 'root',
	storage,
	blacklist: []
};

const persistedReducer = persistReducer(persistConfig, combinedReducers);

export const configureStore = (initialAppState: AppState = InitialAppState) => {
	return createStore(
		persistedReducer,
		initialAppState,
		process.env.NODE_ENV === 'development'
			? composeWithDevTools(applyMiddleware(thunkMiddleware))
			: applyMiddleware(thunkMiddleware)
	);
};
