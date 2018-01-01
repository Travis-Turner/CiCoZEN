import moment from 'moment';
import dateReducer from '../../reducers/date';

const date = moment().format('MM-DD-YYYY').toString()

test('should set the current date using default values', () => {
   const action = {
       type: 'TEST'
   } 
   const state = dateReducer(undefined, action);  
   expect(state).toEqual(date)
});

test('should update the current date when action is set', () => {
    const action = {
        type: 'SET_CURRENT_DATE',
        date: moment()
    }
    const state = dateReducer(undefined, action);  
    expect(state).toEqual(date);
})