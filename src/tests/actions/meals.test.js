import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moment from 'moment';
import database from '../../firebase/firebase';
import meals from '../fixtures/meals';
import { addMeal, startAddMeal, getMeals, startGetMeals } from '../../actions/meals';
import { startSetGoal } from '../../actions/userSettings';

const uid = 'mealsTestUID';
const createMockStore = configureMockStore([thunk]);
const currentDate = moment(0).format('MM-DD-YYYY').toString();
const defaultAuthState = { auth: { uid }, currentDate };

beforeEach((done) => {
    // Clear database before testing
    database.ref(`users/mealsTestUID/`).remove(() => {
        done();
    });
});

test('should set up addMeal object', () => {
    const action = addMeal(meals[0]);
    expect(action).toEqual({
        type: 'ADD_MEAL',
        meal: meals[0]
    });
});

test('should dispatch startAddMeal action', (done) => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(startAddMeal(meals[0])).then(() => {
        const action = store.getActions();
        database.ref(`users/${uid}/days/${currentDate}`).once('value').then((snapshot) => {
            const newMeal = snapshot.val().meals;
            const refKey = action[0].meal.id;
            //Make sure new meal in database matches the one added
            expect(newMeal[refKey]).toEqual(meals[0]);
            done();
        });  
    });
});

test('should get up getMeals object', () => {
    const action = getMeals(meals);
    expect(action).toEqual({
        type: 'GET_MEALS',
        meals
    });
});

test('should dispatch startGetMeals and retrieve meals from database', (done) => {
    const store = createMockStore(defaultAuthState);    
    //add meal to database
    store.dispatch(startAddMeal(meals[1])).then(() => {
        //Get meals
        store.dispatch(startGetMeals()).then(() => {
            database.ref(`users/${uid}/days/${currentDate}`).once('value').then((snapshot) => {
                const action = store.getActions();
                expect(action[1]).toEqual({
                    type: 'GET_MEALS',
                    meals: [meals[1]]
                });
                const refKey = action[0].meal.id;
                expect(snapshot.val().meals[refKey]).toEqual(meals[1]);
                done();
            });
        });
    });
})