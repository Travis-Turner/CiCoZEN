import React from 'react';
import { connect } from 'react-redux'
import { startAddMeal } from '../actions/meals';

export class AddMeal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            error: ''
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.elements[0].value;
        const calories = e.target.elements[1].value;
        const carbohydrates = e.target.elements[2].value;
        const protein = e.target.elements[3].value;
        const fat = e.target.elements[4].value;
        //Form validation
        if (!name){
            return this.setState(() => ({
                error: 'Please enter a name for your meal.'
            }));
        } 
        if (!calories){
            return this.setState(() => ({
                error: 'You must provide the number of calories in your meal.'
            }))
        }
        //Add meal
        const meal = {
            name,
            calories,
            carbohydrates,
            protein,
            fat
        }
        this.props.startAddMeal(meal); 
        this.props.history.push('/');
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {this.state.error && <p>{this.state.error}</p>}
                    <p>Name:</p>
                    <input name='name' type='text' />
                    <p>Calories:</p>
                    <input name='calories' type='number' />
                    <p>Carbohydrates:</p>
                    <input name='carbohydrates' type='number' />
                    <p>Protein:</p>
                    <input name='protein' type='number' />
                    <p>Fat:</p>
                    <input name='fat' type='number' />
                    <button>Add Meal</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddMeal: (meal) => dispatch(startAddMeal(meal))
  });
  
  export default connect (undefined, mapDispatchToProps)(AddMeal);