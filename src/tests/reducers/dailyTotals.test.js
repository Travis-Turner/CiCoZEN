import dailyTotalsReducer from '../../reducers/dailyTotals';

test('should set dailyTotals state to default values', () => {
    const action = {
        type: 'TEST'
    }
    const state = dailyTotalsReducer(undefined, action);
    expect(state).toEqual({
        calories: 0,
        carbohydrates: 0,
        fat: 0,
        protein: 0
    });
});

test('should set dailyTotals state with provided values', () => {
    const totals = {
        calories: 1500,
        carbohydrates: 100,
        protein: 120,
        fat: 80
    }
    const action = {
        type: 'SET_TOTALS',
        totals
    }
    const state = dailyTotalsReducer(undefined, action);
    expect(state).toEqual(totals);
})