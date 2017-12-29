import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class MealForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.meal ? props.meal.name : '',
      calories: props.meal ? props.meal.calories : 0,
      protein: props.meal ? props.meal.protein : 0,
      carbohydrates: props.carbohydrates ? props.meal.carbohydrates : 0,
      fat: props.fat ? props.meal.fat : 0,
      createdAt: props.meal ? moment(props.meal.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }
  onDescriptionChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  };
  onCaloriesChange = (e) => {
    const calories = e.target.value;

    if (!calories || calories.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ calories }));
    }
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.name || !this.state.calories) {
      this.setState(() => ({ error: 'Please provide food name and calorie amount.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        name: this.state.name,
        calories: this.state.calories,
        createdAt: this.state.createdAt.valueOf()
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Calories"
            value={this.state.calories}
            onChange={this.onCaloriesChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="Add a note for your meal (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <button>Add Meal</button>
        </form>
      </div>
    )
  }
}