import { createStore } from 'redux';

import appReducer from './reducers/appReducer';
import { preloadedState } from './preloadedState';

const store = createStore(appReducer);
// const store = createStore(appReducer, preloadedState);
export default store;
