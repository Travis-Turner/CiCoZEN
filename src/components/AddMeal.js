import React from 'react';
import { connect } from 'react-redux'
import { addMeal } from '../actions/meals';

export class AddMeal extends React.Component {
    constructor(props){
        super(props);

    }
    handleSubmit = (e) => {
        e.preventDefault();
        
        const name = e.target.elements[0].name;
        const calories = e.target.elements[1].name;
        const carbohydrates = e.target.elements[2].name;
        const protein = e.target.elements[3].name;
        const fat = e.target.elements[4].name;

        const meal = {
            name,
            calories,
            carbohydrates,
            protein,
            fat
        }
        this.props.addMeal(meal);
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
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
    addMeal: (meal) => dispatch(addMeal(meal))
  });
  
  export default connect (undefined, mapDispatchToProps)(AddMeal);