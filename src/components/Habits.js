import React, {Component} from "react";
import store from '../store';
import Habit from './Habit';
import HabitForm from "./HabitForm";


class Habits extends Component{
    constructor(props){
        super(props);

        if(window.localStorage.getItem('habits') === null){
            window.localStorage.setItem('habits', []);
        }
        let initialState = window.localStorage.getItem('habits')
        // getting the previously stored data from local storage and setting the initial state with it
        this.state = {
            habits: JSON.parse(initialState)
        }

        this.rerender = this.rerender.bind(this);
    }

    // rerendering the component whenever the state of a child component changes
    rerender(){
        this.setState({
            habits: store.getState()
        });
        console.log("rerendered");
    }

    render(){
        return(
            <div>
                {/* A form for creating a new habit */}
                <HabitForm rerender={this.rerender} habits={this.state.habits}/>
                <ul style={{listStyleType: "none", marginBlockStart: "0px", paddingInlineStart: "0px"}}>
                    
                    {/* Mapping over the habits array and creating a Habit component for each list items */}
                    {this.state.habits !== null && this.state.habits.map(habit => (
                        <Habit 
                            description = {habit.description} 
                            key = {habit.id} 
                            id = {habit.id}
                            rerender={this.rerender}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

export default Habits;