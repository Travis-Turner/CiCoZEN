import database from '../firebase/firebase';

/* These are actions related to updating the user 
settings.  The actions prefaced with 'start' refer 
to async actions that communicate with the database.
*/

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

/* The below action will check to see if the user has a previously
set goal in the database.  Otherwise it will default to 0 at present time.
*/

export const startSetGoal = () => {
    let goal = 0;
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const goalRef = database.ref(`users/${uid}/userSettings/goal`);
        return goalRef.once('value').then((snapshot) => {
            goal = snapshot.val();
            if (goal){
                return database.ref(`users/${uid}/userSettings`).set({
                    goal
                }).then(() => {
                    dispatch(setGoal(goal));               
                })
            }
        })    
    }
}