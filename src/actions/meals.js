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

export const getMeals = (meals) => ({
    type: 'GET_MEALS',
    meals
});

export const startGetMeals = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const currentDate = getState().currentDate;
        return database.ref(`users/${uid}/days/${currentDate}`).once('value').then((snapshot) => {
            let mealObj;
            let meals;
            //Retrieve meals from database if they exist
            try {
                mealObj = snapshot.val().meals;
                meals = Object.keys(mealObj).map((id) => mealObj[id]);
            } catch (e) {
                meals = [];
            }    
            dispatch(getMeals(meals));
        });
    }
}