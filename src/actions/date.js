import database from '../firebase/firebase';

export const setCurrentDate = (date) => ({
    type: 'SET_CURRENT_DATE',
    date
});