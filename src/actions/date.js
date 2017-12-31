import database from '../firebase/firebase';

export const setCurrentDate = (date) => ({
    type: 'SET_CURRENT_DATE',
    date
});

export const startSetCurrentDate = (date) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/userSettings`).once('value').then((snapshot) => {
            dispatch(setCurrentDate(date));
        });
    }
}