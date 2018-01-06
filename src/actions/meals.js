import database from '../firebase/firebase';

export const addMeal = (meal) => ({
    type: 'ADD_MEAL',
    meal
});

export const startAddMeal = (meal) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const currentDate = getState().currentDate;
        return database.ref(`users/${uid}/days/${currentDate}/meals`).push(meal).then((ref) => {
            dispatch(addMeal({
              id: ref.key,
              ...meal
            }));
        });
    }
}