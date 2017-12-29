import React from 'react';
import { connect } from 'react-redux';
import MealListItem from './MealListItem';
import selectMeals from '../selectors/meals';

export const MealList = (props) => (
  <div>
    {
      props.meals.length === 0 ? (
        <p>No meals</p>
      ) : (
          props.meals.map((meal) => {
            return <MealListItem key={meal.id} {...meal} />;
          })
        )
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    meals: selectMeals(state.meals)
  };
};

export default connect(mapStateToProps)(MealList);