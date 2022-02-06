import React, { Component } from "react";
import Day from "./Day";
import '../styles/Week.css';
import { v4 as uuid } from 'uuid';

class Week extends Component{
    render(){
        
        return(
            <div>
                {/* description of the habit */}
                <div id="habit-name">
                    <i id="habit-icon" className="far fa-calendar-check"></i>
                    {this.props.description}
                </div>
                
                {/* week container with 7 day components */}
                <div className="week">
                {/* passing the date with the weekstatus array and the index(idx) of the day to each Day component */}
                    <Day 
                        date={new Date(new Date().getTime()-(6*24*60*60*1000))}
                        id={this.props.id}
                        key={uuid()}
                        weekStatus={this.props.weekStatus}
                        idx={6}
                        rerenderWeekView={this.props.rerenderWeekView}
                    />
                    <Day 
                       date={new Date(new Date().getTime()-(5*24*60*60*1000))} 
                       id={this.props.id}
                       key={uuid()}
                       weekStatus={this.props.weekStatus}
                       idx={5}
                       rerenderWeekView={this.props.rerenderWeekView}
                    />
                    <Day 
                        date={new Date(new Date().getTime()-(4*24*60*60*1000))}
                        id={this.props.id}
                        key={uuid()}
                        weekStatus={this.props.weekStatus}
                        idx={4}
                        rerenderWeekView={this.props.rerenderWeekView}
                    />
                    <Day 
                        date={new Date(new Date().getTime()-(3*24*60*60*1000))}
                        id={this.props.id}
                        key={uuid()}
                        weekStatus={this.props.weekStatus}
                        idx={3}
                        rerenderWeekView={this.props.rerenderWeekView}
                    />
                    <Day 
                        date={new Date(new Date().getTime()-(2*24*60*60*1000))}
                        id={this.props.id}
                        key={uuid()}
                        weekStatus={this.props.weekStatus}
                        idx={2}
                        rerenderWeekView={this.props.rerenderWeekView}
                    />
                    <Day 
                        date={new Date(new Date().getTime()-(1*24*60*60*1000))}
                        id={this.props.id}
                        key={uuid()}
                        weekStatus={this.props.weekStatus}
                        idx={1}
                        rerenderWeekView={this.props.rerenderWeekView}
                    />
                    <Day 
                        date={new Date()}
                        id={this.props.id}
                        key={uuid()}
                        weekStatus={this.props.weekStatus}
                        idx={0}
                        rerenderWeekView={this.props.rerenderWeekView}
                    />
                </div>
            </div>
        );
    }
}

export default Week;