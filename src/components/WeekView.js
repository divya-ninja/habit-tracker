import React, {Component} from "react";
import Week from "./Week";
import store from "../store";
import { v4 as uuid } from 'uuid';

class WeekView extends Component{
    constructor(props){
        super(props);
        // Getting the state of the habits from the store and setting the initial state with it
        this.state = {
            currentHabits: store.getState()
        }
        
        // function binding
        this.rerenderWeekView = this.rerenderWeekView.bind(this);
    }

    // rerendering the component whenever the state of a child component changes
    rerenderWeekView(){
        this.setState({
            currentHabits: store.getState()
        });
    }

    render(){
        return(
            <div>
                <div>
                    {/* getting the month from current date */}
                    <h3>{new Date().toLocaleString('default', { month: 'long' })}</h3>
                </div>
                <ul style={{listStyleType: "none", marginBlockStart: "0px", paddingInlineStart: "0px"}}>
                    {/* Mapping over the list of habits and creating a week component for each habit */}
                    {this.state.currentHabits.map(habit => (
                        <Week
                            description={habit.description} 
                            key={uuid()}
                            id={habit.id}
                            weekStatus={habit.weekStatus}
                            rerenderWeekView={this.rerenderWeekView}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

export default WeekView;