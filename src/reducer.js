import * as actions from './actionTypes';
import { v4 as uuid } from 'uuid';

// Getting the previous data from local storage and setting the initial state with it

let habits = localStorage.getItem('habits');
let initialState;
if(habits === null){
    localStorage.setItem('habits', JSON.stringify(new Array(0)));
    initialState = [];
}
if(habits !== null && habits !== []){
    initialState = JSON.parse(habits);
}

export default function reducer(state= initialState, action){
    // if the dispathed action is of HABIT_ADDED type
    if(action.type === actions.HABIT_ADDED){
        // copying the previous state and adding the new habit in it with a unique id, description and weekStatus array
        let newState = 
            [
                ...state,
                {
                    id: uuid(),
                    description: action.payload.description,
                    weekStatus: ["", "", "", "", "", "", ""]
                }
            ];
        

        console.log(newState)
        
        // setting the new state in local storage
        localStorage.setItem('habits', JSON.stringify(newState));
        
        return newState;
    }
    // if the dispathed action is of HABIT_DELETED type
    else if(action.type === actions.HABIT_DELETED){
        // filtering out the habit to be deleted based on the id of the habit
        let newState =  state.filter(habit => habit.id !== action.payload.id);

        // setting the local storage with the new state after deletion
        localStorage.setItem('habits',  JSON.stringify(newState));
        return newState
    }
    // if the dispathed action is of STATUS_CHANGED type
    else if(action.type === actions.STATUS_CHANGED){
        // filtering the habit whose status need to be changed
        const habit = state.filter(habit => habit.id === action.payload.id)

        // Toggeling the status of the day among 'done', 'not-done', 'none'
        if(habit[0].weekStatus[action.payload.idx] === ""){
            habit[0].weekStatus[action.payload.idx] = "done"
        }else if(habit[0].weekStatus[action.payload.idx] === "done"){
            habit[0].weekStatus[action.payload.idx] = "not-done"
        }else{
            habit[0].weekStatus[action.payload.idx] = ""
        }

        // setting local storage with updated data
        localStorage.setItem('habits', JSON.stringify(state));
        return state;
           
    }

    return state;
}