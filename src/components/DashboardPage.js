import React from 'react';
import { connect } from 'react-redux';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';
import { setCurrentDate } from '../actions/date';

export class DashboardPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      date: moment(),
      focused: false
    }
  }
  onDateChange = (date) => {
    const newDate = date;
    this.setState(() => ({ date: newDate }));
    this.props.setCurrentDate(newDate);
  }
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ focused }));
  }
  render (){
    return (
      <div>
        
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
        <p>CURRENT GOAL - {this.props.goal}</p>
      </div>
    );
  }
} 

const mapStateToProps = (state) => ({
  goal: state.userSettings.goal
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentDate: (date) => dispatch((setCurrentDate(date)))
});

export default connect (mapStateToProps, mapDispatchToProps)(DashboardPage);
