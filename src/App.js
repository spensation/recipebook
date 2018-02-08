import React, { Component } from 'react';
import './App.css';
import RecipesContainer from './containers/RecipesContainer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>RecipeBook</h1>
        </div>
        <RecipesContainer />
      </div>
    );
  }
}

export default App;
