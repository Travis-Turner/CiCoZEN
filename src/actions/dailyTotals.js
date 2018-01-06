import database from '../firebase/firebase';

export const setTotals = (totals) => ({
    type: 'SET_TOTALS',
    totals
});

export const startSetTotals = () => {
    const totals = {
        calories: 0,
        protein: 0,
        carbohydrates: 0,
        fat: 0
    }
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const selectedDate = getState().currentDate;
        const dateRef = database.ref(`users/${uid}/days/${selectedDate}`);
        return dateRef.once('value').then((snapshot) => {
            let oldTotals;
            //Check to see if totals for this day already exist in database.
            try {
                oldTotals = snapshot.val().totals;
                return database.ref(`users/${uid}/days/${selectedDate}`).update({
                    totals: oldTotals
                }).then(() => {
                    dispatch(setTotals(oldTotals));               
                });
            } catch (e) {
                return database.ref(`users/${uid}/days/${selectedDate}`).update({
                    totals
                }).then(() => {
                    dispatch(setTotals(totals));               
                });
            }       
        });
    }
}