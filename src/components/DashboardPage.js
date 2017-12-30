import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import MealList from './MealList';
import { startSetDate} from '../actions/date';
import { history } from '../routers/AppRouter';


class DashboardPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      calendarFocused: false,
      currentDay: moment()
    }
  }
  onDateChange = (date) => {
   //date is a moment object.
    this.props.startSetDate(date);
    this.setState(() => ({currentDay: date}));
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  render (){
    return (
      <div>
      <h3>Current date: {this.state.currentDay.format('DD-MM-YYYY').toString()}</h3>
      <NavLink to="/add-meal">Add Meal</NavLink>
      <SingleDatePicker
              date={this.state.currentDay}
              onDateChange={this.onDateChange}
              focused={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              isOutsideRange={() => false}
            />
      <MealList />
    </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startSetDate: (date) => dispatch(startSetDate(date))
});

const mapStateToProps = (state) => {
  return {
    date: state.date
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);



