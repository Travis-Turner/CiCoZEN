import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import mealsReducer from '../reducers/meals';
import dateReducer from '../reducers/date';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      meals: mealsReducer,
      auth: authReducer,
      date: dateReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
