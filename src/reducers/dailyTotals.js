const dailyTotalsReducerDefaultState = {
  calories: 0,
  carbohydrates: 0,
  fat: 0,
  protein: 0
};

export default (state = dailyTotalsReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TOTALS':
      return action.totals;
    default:
      return state;
  }
};