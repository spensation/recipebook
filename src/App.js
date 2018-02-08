import React, { Component } from 'react';
import './App.css';
import RecipeListContainer from './containers/RecipeListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>RecipeBook</h1>
        </div>
        <RecipeListContainer />
      </div>
    );
  }
}

export default App;
