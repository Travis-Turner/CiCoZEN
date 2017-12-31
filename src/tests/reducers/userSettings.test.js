import userSettingsReducer from '../../reducers/userSettings';

test('should set the calorie goal', () => {
    const action = {
        type: 'SET_GOAL',
        goal: 1500
    }
    const state = userSettingsReducer({}, action);
    expect(state.goal).toBe(1500);
});

test('should update the calorie goal', () => {
    const action = {
        type: 'UPDATE_GOAL',
        goal: 2300
    }
    const state = userSettingsReducer({goal: 1500}, action);
    expect(state.goal).toBe(2300);
});