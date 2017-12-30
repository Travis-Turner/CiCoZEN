import database from '../firebase/firebase';
import moment from 'moment';
import { history } from '../routers/AppRouter';

export const setDate = (date) => ({
    type: 'SET_DATE',
    date: moment(date.value)
  });
  
  export const startSetDate = () => {
    return (dispatch, getState) => {
      // this needs to fetch info from the current day.  that means total cals
      //protein
      //carbs
      //fat

      //i will need to fetch the meals data for the day. 
      //use that data to calculate those variables
      //display them
        dispatch(setDate(date));
    };
 
  };