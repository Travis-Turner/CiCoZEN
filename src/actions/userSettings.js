import database from '../firebase/firebase';

export const updateGoal = (goal) => ({
    type: 'UPDATE_GOAL',
    goal
  });

  //This updates the goal in the userSettings in firebase
  export const startUpdateGoal = (goal) => {
      return (dispatch, getState) => {
          const uid = getState().auth.uid;
          return database.ref(`users/${uid}/userSettings`).set({
              goal
          }).then(() => {
              dispatch(updateGoal(goal))
          }) //thenable
      }
  }
  

export const setGoal = (goal) => ({
    type: 'SET_GOAL',
    goal
});

export const startSetGoal = () => {
    let goal = 0;
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const goalRef = database.ref(`users/${uid}/userSettings/goal`);
        return goalRef.once('value').then((snapshot) => {
            goal = snapshot.val();
            if (goal){
                database.ref(`users/${uid}/userSettings`).set({
                    goal
                }).then(() => {
                    dispatch(setGoal(goal));               
                })
            }
        })    
    }
}