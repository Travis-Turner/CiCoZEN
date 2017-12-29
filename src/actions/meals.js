import database from '../firebase/firebase';
import moment from 'moment';

//ADD MEAL


export const addMeal = (meal) => ({
    type: 'ADD_MEAL',
    meal
});

export const startAddMeal = (mealData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
          name = '',
          calories = 0,
          protein = 0,
          carbohydrates = 0,
          fat = 0,
          createdAt = moment(),
          currentDay = moment().format('DD-MM-YYYY').toString(),
        } = mealData;
        const meal = { name, calories, protein, carbohydrates, fat, createdAt, currentDay };
        
    
        return database.ref(`users/${uid}/${currentDay}/meals`).push(meal).then((ref) => {
          dispatch(addMeal({
            id: ref.key,
            ...meal
          }));
        });
      };
}

// SET_MEALS 

export const setMeals = (meals) => ({
  type: 'SET_MEALS',
  meals
});

export const startSetMeals = () => {
  return (dispatch, getState) => {
    const today = moment().format('DD-MM-YYYY').toString();
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/${today}/meals`).once('value').then((snapshot) => {
      const meals = [];
      
      snapshot.forEach((childSnapshot) => {
        
        meals.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      

      dispatch(setMeals(meals));
    });
  };
};