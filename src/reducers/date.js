// Date Reducer

import moment from 'moment';

const dateReducerDefaultState = moment(0);

export default (state = dateReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_DATE':
      return action.date;
    default:
      return state;
  }
};