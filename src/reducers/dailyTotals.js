const dailyTotalsReducerDefaultState = {};

export default (state = dailyTotalsReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TOTALS':
      return action.totals;
    default:
      return state;
  }
};