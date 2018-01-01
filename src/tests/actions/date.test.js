import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moment from 'moment';
import database from '../../firebase/firebase';
import { setCurrentDate, startSetCurrentDate } from '../../actions/date';

const createMockStore = configureMockStore([thunk]);

const uid = 'myUid';
const defaultAuthState = { auth: { uid }};

test('should set up setDate action object', () => {
    const date = moment(0);
    const action = setCurrentDate(date);
    expect(action).toEqual({
        type: 'SET_CURRENT_DATE',
        date
    });
});

test('should correctly call startSetCurrentDate and dispatch setCurrentDate', (done) => {
    const store = createMockStore(defaultAuthState);
    const date = moment(0);
    store.dispatch(startSetCurrentDate(date)).then(() => {
        //check the actions called on the store//
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_CURRENT_DATE',
            date
        })
        done();
        });
});