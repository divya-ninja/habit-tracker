import React, {Component} from 'react';
import '../styles/HabitForm.css';
import store from '../store';
import { habitAdded } from '../actions';

class HabitForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            habit: ""
        }
        // Binding the functions 
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // function to keep a track of the changes in the input through react state
    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    // function to submit the added habit 
    handleSubmit(evt){
        evt.preventDefault();
        // Dispatching the habitAdded action with the description of the habit to be added to reducer
        store.dispatch(habitAdded(this.state.habit));
        this.setState({
            habit: ""   // Resetting the form value
        });
        
        this.props.rerender();
    }

    render(){
        return(
            <div>
                {/* form for creating a habit */}
                <form id="form" onSubmit={this.handleSubmit}>
                    {/* label for the habit input */}
                    <label id="label" htmlFor='habit'> New Habit : </label>
                    {/* input for habit */}
                    <input
                        id='habit' 
                        name='habit'
                        value={this.state.habit}
                        onChange={this.handleChange}
                        placeholder='Create New Habit........'
                        required
                    />
                    {/* button for adding the habit */}
                    <button id="add-btn">Add</button>
                </form>
            </div>
        );
    }
}

export default HabitForm;