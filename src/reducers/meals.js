const mealsReducerDefaultState = [];

export default (state = mealsReducerDefaultState, action) => {
    switch (action.type){
        case 'ADD_MEAL':
            return [
                ...state,
                action.meal
            ]
        case 'GET_MEALS':
            return action.meals;
        default:
            return state;
    }
}