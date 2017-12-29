// Date Reducer

const dateReducerDefaultState = 0;

export default (state = mealsReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_DATE':
      return action.date;
    default:
      return state;
  }
};