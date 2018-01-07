import moment from 'moment';
import meals from '../fixtures/meals';
import mealsReducer from '../../reducers/meals';

test('should return state when default values are used', () => {
    const action = {
        type: 'TEST'
    };
    const state = mealsReducer(undefined, action);
    expect(state).toEqual([]);
});

test('should add meal', () => {
    const action = {
        type: 'ADD_MEAL',
        meal: meals[0]
    };
    const state = mealsReducer(undefined, action);
    expect(state).toEqual([meals[0]]);
});

//action.meals should be an array of objects
test('should get meals', () => {
    const action = {
        type: 'GET_MEALS',
        meals
    };
    const state = mealsReducer(undefined, action);
    expect(state).toEqual(meals);
});