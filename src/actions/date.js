import database from '../firebase/firebase';
import { startGetMeals } from './meals';

export const setCurrentDate = (date) => ({
    type: 'SET_CURRENT_DATE',
    date
});

export const startSetCurrentDate = (date) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        // return a promise
        return database.ref(`users/${uid}`).once('value').then(() => {
            dispatch(setCurrentDate(date));
        }).then(() => {
            dispatch(startGetMeals());
        });
    }
}