import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { lobbyIdReducer } from './reducers';

const store = createStore(lobbyIdReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;