import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import MealList from './MealList';

const DashboardPage = () => (
  <div>
    <NavLink to="/add-meal">Add Meal</NavLink>
    <MealList />
  </div>
);

export default DashboardPage;
