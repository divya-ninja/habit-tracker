import React, {Component} from "react";
import Week from "./Week";
import store from "../store";
import { v4 as uuid } from 'uuid';

class WeekView extends Component{
    constructor(props){
        super(props);
    
        this.state = {
          habits: []
        }

        this.rerenderWeekView = this.rerenderWeekView.bind(this);
    }
    
    // Getting the state of the habits from the local storage and setting the initial state with it
    componentDidMount(){
        let state = localStorage.getItem('habits');
        
        if(state === null){
            localStorage.setItem('habits', JSON.stringify(new Array(0)));
        
        }
        if(state !== null && state !== []){
            this.setState({
                habits: JSON.parse(state)
            });
        }
    }

    // rerendering the component whenever the state of a child component changes
    rerenderWeekView(){
        this.setState({
            habits: store.getState()
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
                    {this.state.habits.map(habit => (
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