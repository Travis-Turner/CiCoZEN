import React from 'react';
import { connect } from 'react-redux';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';
import { startSetCurrentDate } from '../actions/date';
import { startSetTotals } from '../actions/dailyTotals';
import { Link } from 'react-router-dom';

export class DashboardPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      date: moment(this.props.currentDate),
      focused: false
    }
  }
  onDateChange = (date) => {
    const newDate = date;
    this.setState(() => ({ date: newDate }));
    this.props.startSetCurrentDate(newDate).then(() => {
      this.props.startSetTotals()
    });
  }
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ focused }));
  }
  render (){
    return (
      <div>
        <Link to="/addMeal">
          Add Meal
        </Link>
        <SingleDatePicker
          date={this.state.date}
          onDateChange={this.onDateChange}
          focused={this.state.focused}
          onFocusChange={this.onFocusChange}
          isOutsideRange={() => false}
          numberOfMonths={1}
          daySize={50}
          withPortal={true}
        />
        <p>CURRENT CALORIES - {this.props.currentCalories} </p>
        <p>GOAL CALORIES - {this.props.goal}</p>
      </div>
    );
  }
} 

const mapStateToProps = (state) => ({
  goal: state.userSettings.goal,
  currentCalories: state.dailyTotals.calories,
  currentDate: state.currentDate
  // currentProtein: state.dailyTotals.totals.protein,
  // currentCarbs: state.dailyTotals.totals.carbohydrates,
  // currentFat: state.dailyTotals.totals.fat
});

const mapDispatchToProps = (dispatch) => ({
  startSetCurrentDate: (date) => dispatch(startSetCurrentDate(date)),
  startSetTotals: () => dispatch(startSetTotals())
});

export default connect (mapStateToProps, mapDispatchToProps)(DashboardPage);
