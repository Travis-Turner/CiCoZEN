import React from 'react';
import { connect } from 'react-redux';

const DashboardPage = (props) => (
  <div>
    <p>CURRENT GOAL - {props.goal}</p>
  </div>
);

const mapStateToProps = (state) => ({
  goal: state.userSettings.goal
});

export default connect (mapStateToProps)(DashboardPage);
