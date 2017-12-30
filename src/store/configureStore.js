import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import userSettingsReducer from '../reducers/userSettings';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      userSettings: userSettingsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};