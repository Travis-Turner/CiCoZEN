import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SingleDatePicker } from 'react-dates';
import MealList from './MealList';
import moment from 'moment';

export default class DashboardPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      calendarFocused: false,
      currentDay: moment()
    }
  }
  onDateChange = (currentDay) => {
    if (currentDay) {
      this.setState(() => ({ currentDay }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  render (){
    return (
      <div>
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

