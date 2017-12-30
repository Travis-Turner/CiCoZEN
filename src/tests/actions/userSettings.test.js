import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';
import { updateGoal, setGoal, startUpdateGoal, startSetGoal } from '../../actions/userSettings';


const uid = 'myUid';
const createMockStore = configureMockStore([thunk]);
const defaultAuthState = { auth: { uid } };


beforeEach((done) => {
    const goal = 10;
    database.ref(`users/${uid}/userSettings`).set({
        goal
    }).then(() => {
        done();
    })
  });

test('should generate setGoal object', () => {
    const goal = 1500;
    const action = setGoal(goal);
    expect(action).toEqual({
        type: 'SET_GOAL',
        goal
    });
});

test('should generate updateGoal object', () => {
    const goal = 1500;
    const action = updateGoal(goal);
    expect(action).toEqual({
        type: 'UPDATE_GOAL',
        goal
    })
});

test('should get value of current goal', (done) => {
    // const store = createMockStore(defaultAuthState);

    // store.dispatch(startSetGoal()).then(() => {
    //     const actions = store.getActions();
    //     console.log(store)
    //     expect(action[0]).toEqual({
    //       type: 'SET_GOAL',
    //         goal: 20
    //     });
    
    //     return database.ref(`users/${uid}/userSettings/`).once('value');
    //   }).then((snapshot) => {
    //     done();
    //   });
    done();
});

test('should update current goal', (done) => {
    const store = createMockStore(defaultAuthState);
    const goal = 10;
    store.dispatch(startUpdateGoal(goal)).then(() => {
        const action = store.getActions();
        expect(action[0]).toEqual({
            type: 'UPDATE_GOAL',
            goal: 5
        });
        database.ref(`users/${uid}/userSettings/goal`).once('value').then((snapshot) => {
            expect(snapshot.val()).toBe(5);
            done();
        });     
    })
});