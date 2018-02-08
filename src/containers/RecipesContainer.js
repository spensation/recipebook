import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

class RecipesContainer extends Component {
  constructor(props) {
      super(props)
      this.state = {
        recipes: []
      }
  }

  componentDidMount() {
    fetch('/api/v1/recipes.json')
    .then(response => response.json())
    .then(json => console.log(json));
  }

  render() {
    return (
      <div>
        Recipes
      </div>
    )
  }
};

export default RecipesContainer;
