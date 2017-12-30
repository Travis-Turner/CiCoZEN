
// Date Reducer
import moment from 'moment';

const dateReducerDefaultState = moment().format('MM-DD-YYYY').toString();

export default (state = dateReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_DATE':
      return moment(action.date).format('MM-DD-YYYY').toString()
    default:
      return state;
  }
};