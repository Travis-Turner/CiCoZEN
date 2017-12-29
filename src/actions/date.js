import database from '../firebase/firebase';
import moment from 'moment';

export const setDate = (date) => ({
    type: 'SET_DATE',
    date
  });
  
  export const startSetDate = () => {
    return (dispatch, getState) => {
    
        dispatch(setDate(date));
    };
 
  };