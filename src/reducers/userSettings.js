// User Settings Reducer

const userReducerDefaultState = {};

export default (state = userReducerDefaultState, action) => {
  switch (action.type) {
    case 'UPDATE_GOAL':
      return {
          ...state,
          goal: action.goal
      }
    case 'SET_GOAL':
      return {
          ...state,
          goal: action.goal
      }
    default:
      return state;
  }
};