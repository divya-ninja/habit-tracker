import React, { Component } from 'react';
import '../styles/App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import WeekView from './WeekView';
import Habits from './Habits';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      habits: []
    }
  }

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

  render(){
    return (
      <div className="App">
        {/* links for different pages of the app in navbar */}
        <nav className='App-nav'>
          <NavLink activeclassname="active" className="links" exact="true" to="/">Home</NavLink>
          <NavLink activeclassname="active" className="links" exact="true" to="/week-view">Week View</NavLink>
        </nav>

        {/* creating routes for different pages of the app */}
        <Routes>
          {/* default route will take the user to Habits page */}
          <Route path='/' element={<Habits habits={this.state.habits} />} /> 
          {/* route for showing the status of each habit for the whole week */}
          <Route path='/week-view' element={<WeekView habits={this.state.habits} />}/>
        </Routes>
      </div>
    );
  }
}

export default App;

