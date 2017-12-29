// Meals Reducer

const mealsReducerDefaultState = [];

export default (state = mealsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_MEAL':
      return [
        ...state,
        action.expense
      ];
    case 'SET_MEALS':
      return action.meals;
    default:
      return state;
  }
};