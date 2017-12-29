import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const MealListItem = ({ id, name, calories, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{name}</h3>
    </Link>
    <p>
      {calories} calories.
      -
      {moment(createdAt).format('MMMM Do, YYYY')}
    </p>
  </div>
);

export default MealListItem;
