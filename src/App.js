import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import './App.css';
import RecipeListContainer from './containers/RecipeListContainer';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <NavBar />
        </div>
        <div className="App-header">
          <h1>RecipeBook</h1>
        </div>
        <RecipeListContainer />
      </div>
    );
  }
}

export default App;
