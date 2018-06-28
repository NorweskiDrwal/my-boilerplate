import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createHashHistory';
import { routerMiddleware } from 'react-router-redux';
import logger from 'redux-logger'

// import root epics/reducer
import rootReducer from './reducers';

export const history = createHistory();
const middleware = [routerMiddleware(history), thunk, logger];

const store = createStore(
	rootReducer,
	applyMiddleware(...middleware),
);

export default store;
