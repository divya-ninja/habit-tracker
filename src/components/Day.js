import React, { Component } from "react";
import store from "../store";
import { statusChanged } from '../actions';
import '../styles/Day.css';

class Day extends Component{
    constructor(props){
        super(props);

        // binding the function
        this.changeStatus = this.changeStatus.bind(this);
    }

    // function for toggling the status of the day
    changeStatus(){
        // Dispatching the statusChanged action with the id of the habit and the index of the day whose status is to be changed to reducer
        store.dispatch(statusChanged(this.props.id, this.props.idx));
        this.props.rerenderWeekView();
    }

    render(){
        return(
            <div className={(this.props.date.getDate() === new Date().getDate()) ? "today day" : "day"}>
                {/* Day of the week */}
                <div>
                    {this.props.date.toString().split(' ')[0]}
                </div>
                {/* getting only date of the day */}
                <div>
                    {this.props.date.getDate()}
                </div>
                {/* container for marking the status of the day among 'done', 'not-done' or blank */}
                <div id="status" onClick={this.changeStatus}>
                    {
                        // setting the icon based upon the status
                        (this.props.weekStatus[this.props.idx] === "done") ?
                            <i id="check-icon" className="fas fa-check"></i>
                        : (this.props.weekStatus[this.props.idx] === "not-done" && <i id="cross-icon" className="fas fa-times"></i> )
                    }
                </div>
            </div>
        );
    }
}

export default Day;