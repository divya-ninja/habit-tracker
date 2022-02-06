import * as actions from './actionTypes';

// creating an action for adding a habit
export function habitAdded(description){
    return{
        type: actions.HABIT_ADDED,
        payload: {
            description: description
        }
    };
}

// creating an action for deleting the habit based on the id of the habit 
export function habitDeleted(id){
    return {
        type: actions.HABIT_DELETED,
        payload: {
            id: id
        }
    }
}

// creating an action for changing the status of the day based on the id of the habit and index of the day in weekStatus array 
export function statusChanged(id, idx){
    return {
        type: actions.STATUS_CHANGED,
        payload: {
            id: id,
            idx: idx,
        }
    }
}