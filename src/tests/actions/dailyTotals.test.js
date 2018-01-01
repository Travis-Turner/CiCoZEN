import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moment from 'moment';
import database from '../../firebase/firebase';
import { setTotals, startSetTotals } from '../../actions/dailyTotals';

const createMockStore = configureMockStore([thunk]);

const uid = 'dailyTotalsTestUID';
const currentDate = moment(0).format('MM-DD-YYYY').toString();
const defaultAuthState = { auth: { uid }, currentDate};
const totals = {
    calories: 0,
    protein: 0,
    carbohydrates: 0,
    fat: 0
}
const dateRef = database.ref(`users/${uid}/days/${currentDate}`);


beforeEach((done) => {
    database.ref(`users/${uid}`).remove(() => {
        done();
    });
});

test('should dispatch setTotals action object', () => {
    const action = setTotals(totals);
    expect(action).toEqual({
        type: 'SET_TOTALS',
        totals
    })
});

test('should dispatch startSetTotals and get default when no data exists in database', (done) => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetTotals()).then((snapshot) => {
        const action = store.getActions();
        expect(action[0]).toEqual({
            type: 'SET_TOTALS',
            totals
        });
        dateRef.once('value').then((snapshot) => {
            // This will check that the property in the database called 'totals'
            // is assigned the value of the object called 'totals' that is defined
            // as a const in this file.
            expect(snapshot.val()).toEqual({totals: totals});
            done();
        });
    });
});

test('should dispatch startSetTotals and retrieve pre-exisiting daily total data', (done) => {
    const newTotals = {
        calories: 1,
        protein: 1,
        carbohydrates: 1,
        fat: 1
    }
    dateRef.set({totals: newTotals}).then(() => {
        dateRef.once('value').then((snapshot) => {
            expect(snapshot.val()).toEqual({totals: newTotals});
            done();
        });
    });
});

