
import { createStore } from 'redux';
import reducer from './reducer';

// creating a store and passing the reducer to it
const store = createStore(reducer);

export default store;