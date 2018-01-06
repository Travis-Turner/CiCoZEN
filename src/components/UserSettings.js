import React from 'react';
import { connect } from 'react-redux';
import { startUpdateGoal } from '../actions/userSettings';

export class UserSettings extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            goalCalories: 0,
            error: ''
        }
    }
    onGoalChange = (e) => {
        const goalCalories = e.target.value;
        //Form validation
        if (!goalCalories){
            return this.setState(() => ({
                error: 'Please enter goal calories.'
            }));
        }
        this.setState(() => ({ goalCalories }));
    }
    handleFormSubmit = (e) => {
        e.preventDefault();
        this.props.startUpdateGoal(this.state.goalCalories);
        this.props.history.push('/dashboard');
    }
    render () {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    {this.state.error && <p>{this.state.error}</p>}
                    <input 
                        name='goalCalories' 
                        type='text' 
                        placeholder='Goal calories' 
                        onChange={this.onGoalChange}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    goalCalories: state.goalCalories
  });

const mapDispatchToProps = (dispatch) => ({
    startUpdateGoal: (goalCalories) => dispatch(startUpdateGoal(goalCalories))
  });

export default connect (mapStateToProps, mapDispatchToProps)(UserSettings);