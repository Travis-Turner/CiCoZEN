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
        const dateRef = database.ref(`users/${uid}/${selectedDate}`);
        return dateRef.once('value').then((snapshot) => {
            const newTotals = snapshot.val();
            if (newTotals){
                return database.ref(`users/${uid}/${selectedDate}`).set({
                    totals: newTotals.totals
                }).then(() => {
                    dispatch(setTotals(newTotals));               
                })
            } else {
                return database.ref(`users/${uid}/${selectedDate}`).set({
                    totals
                }).then(() => {
                    dispatch(setTotals(totals));               
                })
            }
        })    
    }
}