const mealsReducerDefaultState = [];

export default (state = mealsReducerDefaultState, action) => {
    switch (action.type){
        case 'ADD_MEAL':
            return [
                ...state,
                action.meal
            ]
        default:
            return state;
    }
}