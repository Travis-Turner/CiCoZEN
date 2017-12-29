import React from 'react';
import { connect } from 'react-redux';
import MealForm from './MealForm';
import { startAddMeal, startSetMeals } from '../actions/meals';

export class AddMeal extends React.Component {
  onSubmit = (meal) => {
    this.props.startAddMeal(meal);
    this.props.startSetMeals().then(() => {
      this.props.history.push('/');
    })
  };
  render() {
    return (
      <div>
        <h1>Add Meal</h1>
        <MealForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddMeal: (meal) => dispatch(startAddMeal(meal)),
  startSetMeals: () => dispatch(startSetMeals())
});

export default connect(undefined, mapDispatchToProps)(AddMeal);
