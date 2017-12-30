import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import userSettingsReducer from '../reducers/userSettings';
import dateReducer from '../reducers/date';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      userSettings: userSettingsReducer,
      currentDate: dateReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
