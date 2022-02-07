import React, {Component} from 'react';
import store from '../store';
import { habitDeleted } from '../actions';
import '../styles/Habit.css';

class Habit extends Component{
    constructor(props){
        super(props);
        
        // Binding the functions
        this.handleDelete = this.handleDelete.bind(this);
    }

    // deleting a habit
    handleDelete(){
        // Dispatching the habitDeleted action with the id of the habit to be deleted to reducer
        store.dispatch(habitDeleted(this.props.id))
        this.props.rerender();
    }

    render(){
        return(
            <div>
                <div className='flex-display habit'>
                    <div className='description'>
                        <i className="fas fa-user-clock"></i>
                        {/* description of the habit */}
                        <li id="list-item">{this.props.description}</li>
                    </div>
                    {/* Delete button for the habit */}
                    <div id='delete-btn'>
                        <button id='delete' onClick={this.handleDelete}><i className="fas fa-trash-alt"></i></button>
                    </div>
                </div>
                <hr />
            </div>
        );        
            
    }
}

export default Habit;